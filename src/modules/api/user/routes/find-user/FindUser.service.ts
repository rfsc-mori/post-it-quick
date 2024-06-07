import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from 'exceptions/api/user/UserNotFound.exception';
import { UserRepository } from 'modules/database/repository/user/UserRepository';
import { UserProfileRepository } from 'modules/database/repository/user-profile/UserProfileRepository';
import { S3Service } from 'modules/s3/S3.service';

import type { TUserWithProfile } from '../../types/userWithProfile.type';

@Injectable()
export class FindUserService {
  constructor(
    private readonly user_repository: UserRepository,
    private readonly user_profile_repository: UserProfileRepository,
    private readonly s3: S3Service,
  ) {}

  async run(target_id: string): Promise<TUserWithProfile> {
    const user = await this.user_repository.findById(target_id);

    if (!user) {
      throw new UserNotFoundException();
    }

    const profile = await this.user_profile_repository.findByUserId(target_id);

    const avatar_url = profile?.avatar_key
      ? this.s3.makePublicURL(profile.avatar_key)
      : null;

    return {
      ...user,
      profile: profile!,
      avatar_url,
    };
  }
}
