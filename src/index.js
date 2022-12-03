//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
//const configDB = require ('./config/configDB');
const userController = require('./app/controllers/userController');
const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const app = new Koa();
const { koaBody } = require('koa-body');

const router = require('./router');
const json = require('koa-json');

app
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(PORT);

module.exports = server;