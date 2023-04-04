/*
  Warnings:

  - Added the required column `codigo` to the `turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `turma` ADD COLUMN `codigo` VARCHAR(191) NOT NULL;
