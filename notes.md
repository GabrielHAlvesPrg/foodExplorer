# Iniciando projeto 
  ``` GitHub:
  []Comandos git terminal:
    [] Iniciando o git: 
      - git init
    
    [] Configurando:
      - git config --global user.name "nome"
      - git config --global user.email "email"

    [] Vendo o contudo das configurações 
      - git config --list (o comando "q" sai da lista)

    []Criando um commit

      - git add .   (esse comando vai adicionar em uma caixa, todos os arquivos que sofreram algum tipo de atualização e vai envia-lo para a preparação(stage area) antes de ir para o git) obs: posso adicionar um item especifico na caixa, colocando o nome dele no lugar do . (git add nomeDoArquivo)

      - git commit -m "algum texto" (esse comando fecha a caixa que esta na preparação(stage area), coloca uma etiqueta com as informações sobre o conteúdo daquela caixa e envia para o git)

# Vite 

  Um conjunto de ferramentas e funcionalidades pré-configuradas para iniciar um projeto ReactJS,
  VueJS entre outros.

  * npm create vite@latest

  digite y

  digite o nome do projeto

  escolha react

  vá até a pasta do projeto que foi criada e rode o npm install

  npm install para criar a pasta node_modules

[] Preparando pastas:
  - Após criar um projeto react com o Vite e usar o npm install, dentro da pasta src apague os seguintes arquivos:
    App.css
    favicon.svg
    logo.svg
    index.css

    obs: o local e nome dos arquivos podem variar de acordo com a versão do vite, então apague os arquivos svg e css

  Agora dentro do arquivo main.jsx, remova a importação do index.css.
  Agora dentro do index.html remova a linha que utiliza os icones(svgs) deletados anteriormente.
  Apague também o arquivo App.jsx.

Tudo Pronto!
