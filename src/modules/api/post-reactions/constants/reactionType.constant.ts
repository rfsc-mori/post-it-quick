export const REACTION_TYPE = {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE',
} as const;

export type TReactionType = (typeof REACTION_TYPE)[keyof typeof REACTION_TYPE];
