-- DropForeignKey
ALTER TABLE `atividades_concluidas` DROP FOREIGN KEY `atividades_concluidas_id_atividade_fkey`;

-- AddForeignKey
ALTER TABLE `atividades_concluidas` ADD CONSTRAINT `atividades_concluidas_id_atividade_fkey` FOREIGN KEY (`id_atividade`) REFERENCES `atividades`(`id_atividade`) ON DELETE CASCADE ON UPDATE CASCADE;
