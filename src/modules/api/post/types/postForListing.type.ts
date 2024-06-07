import type { TPost } from './post.type';

export type TPostForListing = Pick<TPost, 'id' | 'user_id' | 'title' | 'views'>;
