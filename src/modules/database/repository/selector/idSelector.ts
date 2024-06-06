/**
 * Workaround: Retorna apenas o ID de um registro, considerando que não é
 *             normalmente remover completamente o select com o Prisma.
 *
 * Veja mais sobre: https://github.com/prisma/prisma/issues/6252
 */
export const ID_SELECTOR = {
  id: true,
} as const;
