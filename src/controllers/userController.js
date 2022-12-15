const User = require("../model/userModel");

module.exports = {

    async get(ctx) {
        try {
            const users = await User.findAll();
            ctx.status = 200;
            ctx.body = users;
        }
        catch (error){
            ctx.status = 400;
            ctx.send = error;
        }
    },

    async create(ctx) {
        const user = {
            name: ctx.request.body.name,
            email: ctx.request.body.email,
            age: ctx.request.body.age
          };
        
            //const user = ctx.request.body;
            await User.create(user);
            ctx.status = 200;
    },

    async update (ctx){

    },

    async delete (ctx){

    }
}