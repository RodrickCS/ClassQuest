-- CreateTable
CREATE TABLE `alunos` (
    `id_aluno` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `alunos_email_key`(`email`),
    PRIMARY KEY (`id_aluno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professores` (
    `id_prof` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `professores_email_key`(`email`),
    PRIMARY KEY (`id_prof`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividades` (
    `id_atividade` INTEGER NOT NULL AUTO_INCREMENT,
    `id_turma` INTEGER NOT NULL,
    `imagem` LONGBLOB NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `prazo` DATETIME(3) NOT NULL,
    `pontos_conclusao` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id_atividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turma` (
    `id_turma` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id_turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos_turma` (
    `id_ponto` INTEGER NOT NULL AUTO_INCREMENT,
    `id_aluno` INTEGER NOT NULL,
    `id_turma` INTEGER NOT NULL,
    `qtd` DOUBLE NOT NULL,

    PRIMARY KEY (`id_ponto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos_geral` (
    `id_ponto` INTEGER NOT NULL AUTO_INCREMENT,
    `id_aluno` INTEGER NOT NULL,
    `qtd` DOUBLE NOT NULL,

    PRIMARY KEY (`id_ponto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_alunosToturma` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_alunosToturma_AB_unique`(`A`, `B`),
    INDEX `_alunosToturma_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_professoresToturma` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_professoresToturma_AB_unique`(`A`, `B`),
    INDEX `_professoresToturma_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atividades` ADD CONSTRAINT `atividades_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id_turma`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pontos_turma` ADD CONSTRAINT `pontos_turma_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id_aluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pontos_turma` ADD CONSTRAINT `pontos_turma_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turma`(`id_turma`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pontos_geral` ADD CONSTRAINT `pontos_geral_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id_aluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_alunosToturma` ADD CONSTRAINT `_alunosToturma_A_fkey` FOREIGN KEY (`A`) REFERENCES `alunos`(`id_aluno`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_alunosToturma` ADD CONSTRAINT `_alunosToturma_B_fkey` FOREIGN KEY (`B`) REFERENCES `turma`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_professoresToturma` ADD CONSTRAINT `_professoresToturma_A_fkey` FOREIGN KEY (`A`) REFERENCES `professores`(`id_prof`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_professoresToturma` ADD CONSTRAINT `_professoresToturma_B_fkey` FOREIGN KEY (`B`) REFERENCES `turma`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;
