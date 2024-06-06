import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class AvatarProcessor {
  async run(input: Buffer): Promise<Buffer> {
    return await sharp(input)
      .resize({
        width: 200,
        height: 200,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toFormat('jpeg', { quality: 70 })
      .toBuffer();
  }
}
