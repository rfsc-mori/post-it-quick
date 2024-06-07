import type { TPostReaction } from './postReaction.type';

export type TCreatePostReaction = Pick<TPostReaction, 'reaction_type'>;
