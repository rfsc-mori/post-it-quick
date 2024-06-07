import type { TCreatePost } from './createPost.type';

export type TUpdatePost = Pick<TCreatePost, 'title' | 'description'>;
