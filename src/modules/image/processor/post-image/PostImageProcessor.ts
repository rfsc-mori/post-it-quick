import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class PostImageProcessor {
  async run(input: Buffer): Promise<Buffer> {
    return await sharp(input)
      .resize({
        width: 600,
        height: 300,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toFormat('jpeg', { quality: 80 })
      .toBuffer();
  }
}
