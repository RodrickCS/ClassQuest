-- AlterTable
ALTER TABLE `alunos` MODIFY `nivel_de_acesso` VARCHAR(191) NULL DEFAULT 'Aluno';

-- AlterTable
ALTER TABLE `professores` MODIFY `nivel_de_acesso` VARCHAR(191) NULL DEFAULT 'Professor';
