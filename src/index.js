//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

const PORT = process.env.PORT || 3000;

const Koa = require('koa');
const app = new Koa();


const router = require('./router');

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(PORT);

module.exports = server;