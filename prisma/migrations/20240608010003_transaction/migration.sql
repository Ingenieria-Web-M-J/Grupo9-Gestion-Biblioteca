-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "balance" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'USER';
