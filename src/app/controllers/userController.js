const Router = require('koa-router');
const router = new Router();

const User = require('../models/User');

class userController {
    async create(ctx) {
        const user = await User.create(ctx.body);

        return ctx.json(user);
    }

    async list (ctx) {
        //const users = await User.findAll();
        //ctx.body = {total:0, count: 0, rows:[]}
        //return ctx.json(users);
        const { response } = ctx
        response.status = 200;
        response.body = {mesage: 'teste'};
    }

    async update (ctx) {

    }

    async delete (ctx) {

    }
}


module.exports = new userController;