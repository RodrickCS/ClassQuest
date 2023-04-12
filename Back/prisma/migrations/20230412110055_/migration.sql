/*
  Warnings:

  - You are about to drop the column `descricao` on the `atividades_concluidas` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `atividades_concluidas` table. All the data in the column will be lost.
  - Made the column `arquivo` on table `atividades_concluidas` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `atividades_concluidas` DROP COLUMN `descricao`,
    DROP COLUMN `link`,
    MODIFY `arquivo` VARCHAR(191) NOT NULL;
