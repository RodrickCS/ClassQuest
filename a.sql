SELECT a.*, t.id_turma, t.nome
    FROM atividades a
    LEFT JOIN atividades_concluidas ac ON ac.id_atividade = a.id_atividade AND ac.id_aluno = 1
    INNER JOIN  turmas t on t.id_turma = a.id_turma
    WHERE ac.id_concluida IS NULL;