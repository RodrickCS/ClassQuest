# ClassQuest 

 O projeto consiste em um aplicativo gamificado para sala de aula, em que os alunos são incentivados a se envolverem mais ativamente nas atividades escolares, cumprindo tarefas e conquistando pontos que podem ser trocados por recompensas na escola.

 A ideia é motivar os alunos a participarem mais ativamente das atividades escolares, reforçando comportamentos positivos e criando um senso de competição saudável entre eles. Além disso, o aplicativo pode ajudar os professores a gerenciar tarefas e avaliar o desempenho dos alunos de forma mais eficiente.

 Esse projeto tem o potencial de melhorar o engajamento dos alunos e a qualidade do ensino, além de ser uma oportunidade de negócio promissora no setor educacional.

# Instruções para teste: 

- Acessar o [site](https://classquest-site-production.up.railway.app) na nuvem

- Instalação

Será necessário instalar o [XAMPP](https://www.apachefriends.org/pt_br/index.html) e [NodeJS](https://nodejs.org/en)

- Execução
   - Executar o XAMPP e clicar em "START" na opção "MySQL"
     
   - Abrir o VSCode (Recomendado)
     
   - No terminal CMD (CTRL + "), digite:


    ```cmd
    cd back
    npm i
    prisma migrate dev --name "init"
    nodemon
    ```
    - Crie outro terminal (Símbolo de +) e digite:
      


     ```cmd
     cd mobile
     cd classquest
     npm i
     npx expo start --web
     ```
     
     - Em seguida abra o arquivo HTML localizado na pasta Front/Pages/Login/index.html
       
 - Pastas
   - ./mobile (Aplicativo Mobile)
   - ./docs (Documentação do projeto e arquivo de teste no insomnia)
   - ./back (Backend MVC)
   - ./front (Interface web)
  
 - Observações
   - Por usar credenciais da Azure e eu não ter mais acesso à elas, a funcionalidade de enviar/baixar o arquivo está indisponível   
