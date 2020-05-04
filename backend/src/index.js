const express = require('express'); //Importando o express
const cors = require('cors');
const routes = require ('./routes'); //Importanto o arquivo de rotas

const app = express(); //Criando a aplicação com o express

app.use(cors()); //Existem a propriedade origin dentro do CORS, que permite o endereço acessar a aplicação
app.use(express.json()); //Informando para o express que estamos utilizando json para as requisições.
app.use(routes);

/**
 * Rota é o caminho completo, por exemplo, localhost:3333/users,
 * Recurso é a parte que utilizamos no get, por exemplo, '/users'
 */

/**
 * Métodos HTTP: 
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETe: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos Ex:/users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB 
 */

/**
  * Driver: SELECT * FROM Users //Utilizando códigos proprios do SQL
  * Query Builder: table('users').select('*').where() //Utilizando JS 
  */

app.listen(3333); //A aplicação está ativa na porta 3333