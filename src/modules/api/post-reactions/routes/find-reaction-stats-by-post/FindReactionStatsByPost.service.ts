import { Injectable } from '@nestjs/common';
import { PostReactionRepository } from 'modules/database/repository/post-reaction/PostReactionRepository';

import type { TPostReactionStats } from '../../types/postReactionStats.type';

@Injectable()
export class FindReactionStatsByPostService {
  constructor(
    private readonly post_reaction_repository: PostReactionRepository,
  ) {}

  async run(target_id: string): Promise<TPostReactionStats> {
    return await this.post_reaction_repository.getReactionStats(target_id);
  }
}
