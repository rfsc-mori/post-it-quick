import type { TPost } from './post.type';

export type TCreatePost = Pick<TPost, 'title' | 'description'>;
