import type { TPostForListing } from './postForListing.type';

export type TPostForListingWithStats = TPostForListing & {
  readonly views: number;
  readonly comments: number;
  readonly likes: number;
  readonly dislikes: number;
};
