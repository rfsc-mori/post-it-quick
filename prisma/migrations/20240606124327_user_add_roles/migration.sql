-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "UserRoles"[] DEFAULT ARRAY['USER']::"UserRoles"[];
