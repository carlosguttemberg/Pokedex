# Pokedex
Pokedex criada usando NodeJs e React
<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/frontend/src/assets/pokemon-logo.png" width="300">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/node-js.png" width="300">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/react.png" width="300">
</p>

<hr>

### :scroll: Sobre o projeto

<p>Projeto para aprendizagem, construção de uma Pokédex, listando os Pokémon até a sexta geração com seus respectivos atributos. </p>
<p>Para seu desenvolvimento foram criadas duas aplicações, a primeira usando NodeJs para a construção do servidor e a segunda usando React para o Frontend. No projeto também foi utilizado CSS, feito especificamente para o mesmo, usando o StyledComponents.</p>
<p>Ele conta com uma tela de listagem para os Pokémon, contendo uma indicação de quais são lendários.</p>

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/listPokemons.png">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/legendary.png">
</p>


<p>Além de uma para mostrar os atributos especifícos de cada um.</p>
<p align="center">
  <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/detailsPokemon.png" width="1200">
</p>

<p>No projeto foi usado o infinite scroll para carregar os Pokémons de 20 em 20.</p>
<p align="center">
  <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/infiniteScroll.gif" width="1200">
</p>

<p>Para a pesquisa dos pokémons foi usado o auto complete.</p>
<p align="center">
  <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/autoComplete.gif" width="1200">
</p>

<p>Navegação entre as telas do projeto</p>
<p align="center">
  <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/navigation.gif" width="1200">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/navigationPages.gif" width="1200">
</p>

### :rocket: Executando o projeto

<p>Primeiro é preciso instalar as dependencias do projeto, para isso basta acessar a pasta backend e a pasta frontend pelo terminal e executar o install</p>

```bash
  npm install
```

### :factory: Executando o servidor (Aplicação em NodeJs)
<p>Acessar a pasta backend e alterar o arquivo knexfile.js com as configurações da base de dados local, no exemplo abaixo está
configurado uma base de dados MySQL, mas o Knex suporta outras bases. Mais informações na documentação http://knexjs.org/</p>

<p align="center">
   <img src="https://github.com/carlosguttemberg/Pokedex/blob/master/img/knexFile.png" width="1200">
</p>

<p>Pelo terminal será preciso executar a criação das tabelas na base de dados, executando o comando:</p>

```bash
  npx knex migrate:latest
```

<p>Os dados dos Pokémons se encontram nos dois arquivos dentro da pasta database, bastar copiar e executar na base de dados, primeiro é preciso executar os 
dados dos Pokémons</p>

<p>Feito isso só será preciso executar o comando abaixo na pasta do backend para que o servidor fique rodando, ele funciona na porta 3333</p>

```bash
  npm start
```

### :computer: Executando o Frontend (React)

<p>Na aplicação react só será preciso executar o start e o site será carregado, é preciso uma conexão com a internet para exibir as imagens</p>

```bash
  npm start
```
