-- CreateTable
CREATE TABLE "Item" (
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

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
