/*
  Warnings:

  - You are about to drop the `_ServiceToServiceCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ServiceToServiceCategory` DROP FOREIGN KEY `_ServiceToServiceCategory_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ServiceToServiceCategory` DROP FOREIGN KEY `_ServiceToServiceCategory_B_fkey`;

-- DropTable
DROP TABLE `_ServiceToServiceCategory`;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `ServiceCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
