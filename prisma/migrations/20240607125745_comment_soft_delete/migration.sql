-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "deleted_by" UUID;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
