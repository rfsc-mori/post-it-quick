export const AUTHORIZATION_ROLE = {
  USER: 'USER',
} as const;

export type TAuthorizationRole =
  (typeof AUTHORIZATION_ROLE)[keyof typeof AUTHORIZATION_ROLE];
