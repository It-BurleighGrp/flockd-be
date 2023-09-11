/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "serial" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "localization" TEXT,
    "price" TEXT,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);
