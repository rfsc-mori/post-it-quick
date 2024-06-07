export type TPostComment = {
  readonly id: string;

  readonly post_id: string;
  readonly user_id: string;

  readonly description: string;

  readonly created_at: Date;
  readonly updated_at: Date;
};
