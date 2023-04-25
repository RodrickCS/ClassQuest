/*
  Warnings:

  - You are about to drop the column `link` on the `atividades` table. All the data in the column will be lost.
  - Added the required column `titulo` to the `atividades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `atividades` DROP COLUMN `link`,
    ADD COLUMN `titulo` VARCHAR(191) NOT NULL;
