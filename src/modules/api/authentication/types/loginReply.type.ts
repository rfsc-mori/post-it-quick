export type TLoginReply = {
  readonly access_token: string;
  readonly token_type: 'Bearer';
  readonly expires_in: number;
};
