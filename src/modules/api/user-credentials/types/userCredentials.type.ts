export type TUserCredentials = {
  readonly id: string;

  readonly user_id: string;

  readonly password_hash: string;
  readonly last_password_change: Date;

  readonly created_at: Date;
  readonly updated_at: Date;
};
