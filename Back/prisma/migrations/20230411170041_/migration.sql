/*
  Warnings:

  - You are about to drop the column `imagem` on the `atividades` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `atividades` DROP COLUMN `imagem`;

-- AlterTable
ALTER TABLE `pontos` MODIFY `qtd` DOUBLE NULL DEFAULT 0;
