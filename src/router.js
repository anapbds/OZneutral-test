//import { createUser, changeUser, listUsers, deleteUser } from './controllers/userController';
const Router = require('koa-router');
var router = new Router();

const userController = require('./app/controllers/userController');
//rota simples pra testar se o servidor está online
router.get('/', async (ctx) => {
    const { response } = ctx
    response.status = 200;
    response.body = {mesage: 'Seu servidor esta rodando em http://localhost:3000/'};
});

// List users
router.get('/users', userController.list);

// Create user 
router.post('/users', userController.create);

// Edit user
router.put('/users', userController.update);

// Delete user
router.delete('/users', userController.delete);

module.exports = router;