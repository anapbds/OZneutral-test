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
        let user = ctx.request.body;
        openDb().then(db=>{
            db.run('UPDATE User SET nome=?, idade=?, email=? WHERE id=?', [user.nome, user.idade, user.email, user.id]);
        });
        ctx.status = 200;
    }

    async delete (ctx) {
       /* let id = req.body.id;
        openDb().then(db=>{
            db.get('DELETE FROM Pessoa WHERE id=?', [id])
            .then(res=>res)
        });
        res.json({
            "statusCode": 200
        })*/
    }
}

module.exports = new userController;