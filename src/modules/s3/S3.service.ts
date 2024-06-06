import {
  CreateBucketCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
  NotFound,
  PutBucketPolicyCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import type { OnModuleInit } from '@nestjs/common';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import s3Config from 'config/s3.config';
import * as crypto from 'crypto';
import { CouldNotCreateS3Bucket } from 'exceptions/s3/CouldNotCreateS3Bucket.exception';
import { S3DeleteError } from 'exceptions/s3/S3DeleteError.exception';
import { S3UploadError } from 'exceptions/s3/S3UploadError.exception';
import { join } from 'path';

@Injectable()
export class S3Service implements OnModuleInit {
  private readonly logger = new Logger(S3Service.name);

  private readonly client: S3Client;

  constructor(
    @Inject(s3Config.KEY)
    private readonly config: ConfigType<typeof s3Config>,
  ) {
    this.client = new S3Client({
      endpoint: config.server.endpoint,
      forcePathStyle: config.server.use_path_style,
      region: config.server.region,
      credentials: {
        accessKeyId: config.server.credentials.access_key,
        secretAccessKey: config.server.credentials.secret_key,
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.ensureBucketExists();
  }

  async uploadAvatar(user_id: string, buffer: Buffer): Promise<string> {
    const key = `avatar/${user_id}/${crypto.randomBytes(16).toString('hex')}.jpeg`;

    const uploader = new Upload({
      client: this.client,
      params: {
        Bucket: this.config.server.bucket,
        Key: key,
        ACL: 'public-read',
        Body: buffer,
        ContentType: 'image/jpeg',
      },
    });

    await uploader.done().catch((error: Error) => {
      this.logger.error(error);
      throw new S3UploadError();
    });

    return key;
  }

  async deleteByKey(key: string): Promise<void> {
    await this.client
      .send(
        new DeleteObjectCommand({
          Bucket: this.config.server.bucket,
          Key: key,
        }),
      )
      .catch((error: Error) => {
        this.logger.error(error);
        throw new S3DeleteError();
      });
  }

  makePublicURL(key: string): URL {
    const public_url = new URL(this.config.server.public_url);

    public_url.pathname = join(public_url.pathname, key);

    return public_url;
  }

  private async ensureBucketExists(): Promise<void> {
    try {
      await this.client.send(
        new HeadBucketCommand({ Bucket: this.config.server.bucket }),
      );
    } catch (error) {
      if (error instanceof NotFound) {
        await this.client.send(
          new CreateBucketCommand({
            Bucket: this.config.server.bucket,
            CreateBucketConfiguration: {
              LocationConstraint: this.config.server.region,
            },
          }),
        );

        await this.client.send(
          new PutBucketPolicyCommand({
            Bucket: this.config.server.bucket,
            Policy: JSON.stringify({
              Version: '2012-10-17',
              Statement: [
                {
                  Sid: 'AddPublicReadAccess',
                  Effect: 'Allow',
                  Principal: '*',
                  Action: 's3:GetObject',
                  Resource: `arn:aws:s3:::${this.config.server.bucket}/*`,
                },
              ],
            }),
          }),
        );
      } else {
        this.logger.error(error);
        throw new CouldNotCreateS3Bucket();
      }
    }
  }
}
