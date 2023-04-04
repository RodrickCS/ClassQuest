/*
  Warnings:

  - You are about to drop the `_alunostoturma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_alunostoturma` DROP FOREIGN KEY `_alunosToturma_A_fkey`;

-- DropForeignKey
ALTER TABLE `_alunostoturma` DROP FOREIGN KEY `_alunosToturma_B_fkey`;

-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `id_turma` INTEGER NULL;

-- DropTable
DROP TABLE `_alunostoturma`;

-- AddForeignKey
ALTER TABLE `alunos` ADD CONSTRAINT `alunos_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id_turma`) ON DELETE SET NULL ON UPDATE CASCADE;
