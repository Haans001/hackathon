/*
  Warnings:

  - You are about to drop the column `description` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `isApproved` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `organisationId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "description",
DROP COLUMN "isApproved",
ADD COLUMN     "organisationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
