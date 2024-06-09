import { AUTHORIZATION_ROLE } from 'modules/api/authorization/constants/authorizationRole.constant';

export const USER_DESCRIPTION_MESSAGES = {
  CREATE_USER_API: 'Rota de criação de usuário.',
  CREATE_USER_CREATED: 'Usuário criado com sucesso.',

  DELETE_CURRENT_USER_API: 'Rota de exclusão de conta.',
  DELETE_CURRENT_USER_DELETED: 'Conta excluída com sucesso.',

  UPDATE_CURRENT_USER_API: 'Rota de atualização de usuário.',
  UPDATE_CURRENT_USER_UPDATED: 'Usuário atualizado com sucesso.',

  FIND_CURRENT_USER_API: 'Rota de busca de usuário atual.',
  FIND_CURRENT_USER_FOUND: 'Usuário encontrado com sucesso.',

  FIND_USER_API: 'Rota de busca de usuário.',
  FIND_USER_FOUND: 'Usuário encontrado com sucesso.',

  USER_ID: 'Identificador único do usuário.',
  USER_NAME: 'Nome do usuário.',
  USER_EMAIL: 'Email do usuário.',
  USER_ROLES: 'Grupos de permissões do usuário.',
  USER_PASSWORD: 'Senha do usuário.',
  USER_CREATED_AT: 'Data de criação do usuário.',
  USER_UPDATED_AT: 'Data de atualização do usuário.',
  USER_AVATAR_URL: 'URL do avatar do usuário.',
  USER_PROFILE: 'Perfil do usuário.',

  EXAMPLE_USER_ID: '391d68f6-9f2b-4e78-82c7-160b896f7963',
  EXAMPLE_USER_NAME: 'John Doe',
  EXAMPLE_USER_EMAIL: 'john.doe@example.com',
  EXAMPLE_USER_ROLES: [AUTHORIZATION_ROLE.USER],
  EXAMPLE_USER_PASSWORD: 'JohnDoe123!@#',
  EXAMPLE_USER_CREATED_AT: '2024-06-05T12:00:00.000Z',
  EXAMPLE_USER_UPDATED_AT: '2024-06-06T12:00:00.000Z',
  EXAMPLE_USER_AVATAR_URL:
    'http://localhost:9000/postitquick/avatar/ab664b84-ebd2-47bc-9450-82a002a89316/6283fc0f088f69d6526bd17055b0d499.jpeg',
} as const;
