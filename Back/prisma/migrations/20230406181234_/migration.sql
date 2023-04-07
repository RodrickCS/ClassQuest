/*
  Warnings:

  - Added the required column `nome` to the `turma` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `turma` ADD COLUMN `nome` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `atividades_concluidas` (
    `id_concluida` INTEGER NOT NULL AUTO_INCREMENT,
    `id_atividade` INTEGER NOT NULL,
    `id_aluno` INTEGER NOT NULL,
    `total_pontos` DOUBLE NOT NULL,
    `data_concluida` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_concluida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atividades_concluidas` ADD CONSTRAINT `atividades_concluidas_id_atividade_fkey` FOREIGN KEY (`id_atividade`) REFERENCES `atividades`(`id_atividade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `atividades_concluidas` ADD CONSTRAINT `atividades_concluidas_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id_aluno`) ON DELETE RESTRICT ON UPDATE CASCADE;
