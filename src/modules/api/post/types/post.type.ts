export type TPost = {
  readonly id: string;

  readonly user_id: string;

  readonly title: string;
  readonly description: string;

  readonly version: number;

  readonly image_key: string | null;

  readonly created_at: Date;
  readonly updated_at: Date;
};
