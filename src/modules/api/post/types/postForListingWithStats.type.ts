import type { TPostForListing } from './postForListing.type';

export type TPostForListingWithStats = TPostForListing & {
  readonly comments: number;
  readonly likes: number;
  readonly dislikes: number;
};
