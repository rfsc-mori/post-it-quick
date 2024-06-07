-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "version" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "PostHistory" (
    "id" UUID NOT NULL,
    "post_id" UUID NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PostHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostHistory" ADD CONSTRAINT "PostHistory_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
