import { REACTION_TYPE } from 'modules/api/post-reactions/constants/reactionType.constant';

export const POST_REACTION_DESCRIPTION_MESSAGES = {
  ADD_POST_REACTION_API: 'Adiciona uma reação a uma postagem.',
  ADD_POST_REACTION_CREATED: 'Reação adicionada com sucesso.',

  POST_REACTION_TYPE: 'Tipo da reação ao post.',
  POST_REACTIONS: 'Reações ao post.',

  EXAMPLE_POST_REACTION_TYPE: REACTION_TYPE.LIKE,
  EXAMPLE_POST_REACTIONS: {
    [REACTION_TYPE.LIKE]: 1,
    [REACTION_TYPE.DISLIKE]: 0,
  },
} as const;
