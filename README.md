# webpack

# 0001-first

yarn add lodash
yarn add -D webpack webpack-cli

- acessar "/Projetos/Src/Samples/webpack/0001-first"
- executar um dos comandos abaixo:
  - npx webpack
  - npx webpack --config webpack.config.js
    - caso queira especificar qual o arquivo de configuração que será utilizado

# 0002-asset-management

yarn add -D style-loader css-loader
  - carrega css dentro do js como um módulo
yarn add -D file-loader
  - carrega imagem
yarn add -D csv-loader xml-loader
  - carrega csv, tsv e xml
yarn run build
  - executa o build do projeto via linha de comando

# 0003-output-management

yarn add -D html-webpack-plugin
  - gera um arquivo html, apontando dinamicamente para os pontos de entrada
yarn add -D clean-webpack-plugin
  - limpa um diretorio

# 0004-development
yarn add -D webpack-dev-server
yarn add -D express webpack-dev-middleware