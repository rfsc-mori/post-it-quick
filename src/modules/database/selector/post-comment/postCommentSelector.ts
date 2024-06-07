export const POST_COMMENT_SELECTOR = {
  id: true,

  post_id: true,
  user_id: true,

  description: true,

  created_at: true,
  updated_at: true,
} as const;
