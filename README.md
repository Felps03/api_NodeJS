# api_NodeJS

<p> express com o gerenciador de pacotes </p>

```
npm install express@4.16.3 --save-exact
```
<p> mecanismo que automaticamente atualizasse a instância do servidor a cada salvamento do projeto, permitindo que testássemos as alterações diretamente no navegador.</p>

```
npm install nodemon@1.18.4 --save-dev -save-exact
```

<p>manipular uma requisição antes que ela chegue na nossa lógica de negócios.</p>

```
npm install body-parser@1.18.3 --save-exact
```


<p>filtrar todas as requisições que cheguem na aplicação, verificando se, nelas, existe ou não um valor para id. Ou seja, dada uma condição específica, queremos sobrescrever o método de envio da nossa requisição.</p>

```
npm install method-override@3.0.0 --save-exact
```

<p>Como a própria documentação diz, o Express Validator é um conjunto de middlewares que encapsulam diversos recursos da biblioteca validator.js.</p>

<p>Express Validator: https://express-validator.github.io/docs/</p>

<p>Validator.js: https://github.com/chriso/validator.js</p>

<p>Seção de validadores do validator.js: https://github.com/chriso/validator.js#validators

```
npm install --save express-validator
```


```
CREATE TABLE `pessoas` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) NOT NULL,
    `nascimento` DATE NOT NULL,
    `cpf` varchar(14) NOT NULL,
    `peso` decimal(5,2),
    `altura` decimal(3,2),
    `descricao` text,
    `senha` varchar(255),
    PRIMARY KEY (id)
);
```
