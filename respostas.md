1 - Deve-se abrir qualquer cmd e instalar o framework pelo npm, pelo comando "npm install -g @angular/cli". Então criar/selecionar uma pasta para trabalhar com o Angular, abrir o cmd desta pasta e digitar o comando "ng new NomeProjeto"

5- Sim há uma diferença, a pasta node_modules não está presente no repositório remoto, pois o arquivo .gitignore a impede de ser enviada. Não é considerado boa prática subir esta pasta para o git pois é uma pasto com dezenas de arquivos, e que podem ser instalados sem problema algum posteriormente se necessário

6- Com o comando "npm i" e através das informações do arquivo "package.json" o node instala todas as dependências necessárias