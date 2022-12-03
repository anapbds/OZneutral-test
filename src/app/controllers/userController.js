const Router = require('koa-router');
const router = new Router();
const openDb = require ('../../config/configDB');

class userController {

    async create(ctx) {
        let user = ctx.request.body;
        openDb().then(db=>{
            db.run('INSERT INTO User (nome, idade, email) VALUES (?,?,?)', [user.nome, user.idade, user.email]);
        });
        ctx.status = 200;
    }

    async list (ctx) {
        /*openDb().then(db=>{
            db.all('SELECT * FROM User')
            .then(ctx.body = users[ctx.params.id])
        });*/
        ctx.status = 200;
    }

    async update (ctx) {

    }

    async delete (ctx) {

    }
}

module.exports = new userController;