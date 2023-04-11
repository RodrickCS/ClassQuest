/*
  Warnings:

  - You are about to drop the column `total_pontos` on the `atividades_concluidas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `atividades_concluidas` DROP COLUMN `total_pontos`,
    ADD COLUMN `arquivo` LONGBLOB NULL,
    ADD COLUMN `descricao` VARCHAR(191) NULL,
    ADD COLUMN `link` VARCHAR(191) NULL;
