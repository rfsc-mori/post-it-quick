import type { TPost } from './post.type';

export type TUpdatePost = Partial<
  Pick<TPost, 'title' | 'description' | 'image_key'>
>;
