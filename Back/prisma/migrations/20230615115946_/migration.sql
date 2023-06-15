-- CreateTable
CREATE TABLE `alunos` (
    `id_aluno` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nivel_de_acesso` VARCHAR(191) NULL DEFAULT 'Aluno',

    UNIQUE INDEX `alunos_email_key`(`email`),
    PRIMARY KEY (`id_aluno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `professores` (
    `id_prof` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nivel_de_acesso` VARCHAR(191) NULL DEFAULT 'Professor',

    UNIQUE INDEX `professores_email_key`(`email`),
    PRIMARY KEY (`id_prof`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividades` (
    `id_atividade` INTEGER NOT NULL AUTO_INCREMENT,
    `id_turma` INTEGER NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `prazo` DATETIME(3) NOT NULL,
    `aberta` INTEGER NOT NULL DEFAULT 1,
    `pontos_conclusao` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id_atividade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividades_concluidas` (
    `id_concluida` INTEGER NOT NULL AUTO_INCREMENT,
    `id_atividade` INTEGER NOT NULL,
    `id_aluno` INTEGER NOT NULL,
    `data_concluida` DATETIME(3) NOT NULL,
    `arquivo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_concluida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `turmas` (
    `id_turma` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `codigo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `premios` (
    `id_premio` INTEGER NOT NULL AUTO_INCREMENT,
    `id_turma` INTEGER NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `pontos_requeridos` DOUBLE NOT NULL,

    PRIMARY KEY (`id_premio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos` (
    `id_ponto` INTEGER NOT NULL AUTO_INCREMENT,
    `id_aluno` INTEGER NOT NULL,
    `id_turma` INTEGER NOT NULL,
    `qtd` DOUBLE NULL DEFAULT 0,

    PRIMARY KEY (`id_ponto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_alunosToturmas` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_alunosToturmas_AB_unique`(`A`, `B`),
    INDEX `_alunosToturmas_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_professoresToturmas` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_professoresToturmas_AB_unique`(`A`, `B`),
    INDEX `_professoresToturmas_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atividades` ADD CONSTRAINT `atividades_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `atividades_concluidas` ADD CONSTRAINT `atividades_concluidas_id_atividade_fkey` FOREIGN KEY (`id_atividade`) REFERENCES `atividades`(`id_atividade`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `atividades_concluidas` ADD CONSTRAINT `atividades_concluidas_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id_aluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `premios` ADD CONSTRAINT `premios_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pontos` ADD CONSTRAINT `pontos_id_aluno_fkey` FOREIGN KEY (`id_aluno`) REFERENCES `alunos`(`id_aluno`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pontos` ADD CONSTRAINT `pontos_id_turma_fkey` FOREIGN KEY (`id_turma`) REFERENCES `turmas`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_alunosToturmas` ADD CONSTRAINT `_alunosToturmas_A_fkey` FOREIGN KEY (`A`) REFERENCES `alunos`(`id_aluno`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_alunosToturmas` ADD CONSTRAINT `_alunosToturmas_B_fkey` FOREIGN KEY (`B`) REFERENCES `turmas`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_professoresToturmas` ADD CONSTRAINT `_professoresToturmas_A_fkey` FOREIGN KEY (`A`) REFERENCES `professores`(`id_prof`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_professoresToturmas` ADD CONSTRAINT `_professoresToturmas_B_fkey` FOREIGN KEY (`B`) REFERENCES `turmas`(`id_turma`) ON DELETE CASCADE ON UPDATE CASCADE;
