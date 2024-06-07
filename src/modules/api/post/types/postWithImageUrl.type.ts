import type { TPost } from './post.type';

export type TPostWithImageUrl = TPost & {
  readonly image_url?: URL | null;
};
