const openDb = require ('../../config/configDB');

class userController {

    async create(ctx) {
        let user = ctx.request.body;
        openDb().then(db=>{
            db.get('INSERT INTO User (nome, idade, email) VALUES (?,?,?)', [user.nome, user.idade, user.email]);
        });
        ctx.status = 200;
    }

    //terminar
    async list (ctx) {
        openDb().then(db=>{
            db.all('SELECT * FROM User')

        });
        ctx.status = 200;
    }

    async update (ctx) {
        let user = ctx.request.body;
        openDb().then(db=>{
            db.run('UPDATE User SET nome=?, idade=?, email=? WHERE id=?', [user.nome, user.idade, user.email, user.id]);
        });
        ctx.status = 200;
    }
    //terminar
    async delete (ctx) {
        let user = ctx.request.body;
        openDb().then(db=>{
            db.get('DELETE FROM User WHERE id=?', [user.id]);
        });
        ctx.status = 200;
    }
}

module.exports = new userController;