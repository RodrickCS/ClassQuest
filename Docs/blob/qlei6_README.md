# AgroTech

# Como testar:
# iniciando o Backend
### Primeiro: terá que instalar no seu computador, o XAMPP, Node.js e o insomnia.

### Segundo: abra o XAMPP e clique START no MySQL.

### Terceiro: abra o projeto com VSCode ou outros programas .

### Quarto: abra o terminal (CMD) e digite:
### - cd back
### - npm i
### - npm i prisma
### - npm i nodemon

### Quinto: provavelmente você não vai ter variáveis de ambiente então crie um arquivo chamado .env
### e digite duas variáveis:     
### - DATABASE_URL=mysql://root@localhost:3306/AgroTech
### - KEY="Qualquer coisa"

### Sexto: no terminal ainda na pasta back (cd back) digite:
### - prisma generate
### - prisma migrate dev --name nome_qualquer
### - nodemon

### isso deve fazer com que o banco de dados esteja respondendo para o backend. no terminal deverá aparecer "Respondendo na porta 3000"

## antes de ir para o front end terá que adicionar dados a tabela funcionários para efetuar o login

### Primeiro: abra o insomnia e vá para a página principal

### segundo: na parte superior direito terá um botão "+ CREATE" clique e selecione "+ FILE" e navegue até a pasta AgroTech Documentos
### e importe o arquivo "AgroTech_Local.json"

### com o arquivo importado vá até a pasta funcionários e clique no "Register" as informações já vão estar preenchidas então clique em "SEND" ou aperte Ctrl + Enter

# Indo para o Frontend

### na pasta front abra a pasta pages e abra a pasta login
### no arquivo index.html abra com o chrome ou com o a extensão do VSCode "LiveServer"
### agora é só testar!
