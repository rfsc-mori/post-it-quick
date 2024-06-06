export type TUserProfile = {
  readonly id: string;

  readonly user_id: string;

  readonly description?: string | null;

  readonly avatar_key?: string | null;

  readonly created_at: Date;
  readonly updated_at: Date;
};
