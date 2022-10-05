-- DropForeignKey
ALTER TABLE `Service` DROP FOREIGN KEY `Service_categoryId_fkey`;

-- CreateTable
CREATE TABLE `_ServiceToServiceCategory` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ServiceToServiceCategory_AB_unique`(`A`, `B`),
    INDEX `_ServiceToServiceCategory_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ServiceToServiceCategory` ADD CONSTRAINT `_ServiceToServiceCategory_A_fkey` FOREIGN KEY (`A`) REFERENCES `Service`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ServiceToServiceCategory` ADD CONSTRAINT `_ServiceToServiceCategory_B_fkey` FOREIGN KEY (`B`) REFERENCES `ServiceCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
