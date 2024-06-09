import type { TReactionType } from 'modules/api/post-reactions/constants/reactionType.constant';
import { REACTION_TYPE } from 'modules/api/post-reactions/constants/reactionType.constant';

export const POST_REACTION_DESCRIPTION_MESSAGES = {
  ADD_POST_REACTION_API: 'Adiciona uma reação a uma postagem.',
  ADD_POST_REACTION_CREATED: 'Reação adicionada com sucesso.',

  FIND_REACTION_STATS_BY_POST_API: 'Encontra reações a uma postagem.',
  FIND_REACTION_STATS_BY_POST_CREATED: 'Reações encontradas com sucesso.',

  POST_REACTION_TYPE: 'Tipo da reação ao post.',
  POST_REACTIONS: 'Reações ao post.',

  POST_REACTION_LIKE: 'Curtidas.',
  POST_REACTION_DISLIKE: 'Não-curtidas.',

  EXAMPLE_POST_REACTION_TYPE: REACTION_TYPE.LIKE,
  EXAMPLE_POST_REACTIONS: {
    [REACTION_TYPE.LIKE]: 7,
    [REACTION_TYPE.DISLIKE]: 4,
  } satisfies Record<TReactionType, number>,
} as const;
