import type { TUserProfile } from './userProfile.type';

export type TUpdateUserProfile = Pick<
  TUserProfile,
  'description' | 'avatar_key'
>;
