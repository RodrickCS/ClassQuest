/*
  Warnings:

  - Added the required column `corrigida` to the `atividades_concluidas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `atividades_concluidas` ADD COLUMN `corrigida` INTEGER NOT NULL;
