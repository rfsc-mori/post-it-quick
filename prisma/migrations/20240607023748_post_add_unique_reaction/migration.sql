/*
  Warnings:

  - A unique constraint covering the columns `[user_id,post_id,reaction_type]` on the table `PostReaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PostReaction_user_id_post_id_reaction_type_key" ON "PostReaction"("user_id", "post_id", "reaction_type");
