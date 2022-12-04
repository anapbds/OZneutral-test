//sample test
//Para rodar os testes, use: npm test
//PS: Os testes não estão completos e alguns podem comnter erros.

// veja mais infos em:
//https://mochajs.org/
//https://www.chaijs.com/
//https://www.chaijs.com/plugins/chai-json-schema/
//https://developer.mozilla.org/pt-PT/docs/Web/HTTP/Status (http codes)

const app =  require('../src/index.js');

const assert = require('assert');
const chai = require('chai')
const chaiHttp = require('chai-http');
const chaiJson = require('chai-json-schema');

const userSchema = require('../src/app/model/User');

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect;

//Inicio dos testes

//este teste é simplesmente pra enteder a usar o mocha/chai
describe('Um simples conjunto de testes', function () {
    it('deveria retornar -1 quando o valor não esta presente', function () {
        assert.equal([1, 2, 3].indexOf(8), -1);
    });
});

//testes da aplicação
describe('Testes da aplicaçao',  () => {
    it('o servidor esta online', function (done) {
        chai.request(app)
        .get('/')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
        });
    });

    it('deveria ser uma lista vazia de usuarios', function (done) {
        chai.request(app)
        .get('/users')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.rows).to.eql([]);
        done();
        });
    });

    it('deveria criar o usuario raupp', function (done) {
        chai.request(app)
        .post('/users')
        .send({nome: "raupp", idade: 35, email: "jose.raupp@devoz.com.br"})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });

    //menor de idade, dará erro 
    it('deveria criar o usuario juninho', function (done) {
        chai.request(app)
        .post('/users')
        .send({nome: "juninho", email: "juninhosilva@gmail.com", idade: 16})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });
    it('deveria criar o usuario lucas', function (done) {
        chai.request(app)
        .post('/users')
        .send({nome: "lucas", email: "lucas@gmail.com", idade: 23})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });
    it('deveria criar o usuario alex', function (done) {
        chai.request(app)
        .post('/users')
        .send({nome: "alex", email: "alex@gmail.com", idade: 29})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });
    it('deveria criar o usuario andressa', function (done) {
        chai.request(app)
        .post('/users')
        .send({nome: "andressa", email: "andressa@gmail.com", idade: 23})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });
    it('deveria criar o usuario ana', function (done) {
        chai.request(app)
        .post('/users')
        .send({nome: "ana", email: "anapbernardessilva@gmail.com", idade: 22})
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();
        });
    });

    it('o usuario naoExiste não existe no sistema', function (done) {
        chai.request(app)
        .get('/user/naoExiste')
        .end(function (err, res) {
            expect(err.response.body.error).to.be.equal('User not found'); //possivelmente forma errada de verificar a mensagem de erro
            expect(res).to.have.status(404);
            expect(res.body).to.be.jsonSchema(userSchema);
            done();
        });
    });

    it('o usuario raupp existe e é valido', function (done) {
        chai.request(app)
        .get('/user/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(userSchema);
            done();
        });
    });

    it('deveria excluir o usuario raupp', function (done) {
        chai.request(app)
        .delete('/user/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(userSchema);
            done();
        });
    });

    it('o usuario raupp não deve existir mais no sistema', function (done) {
        chai.request(app)
        .get('/user/raupp')
        .end(function (err, res) {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(userSchema);
            done();
        });
    });

    it('deveria ser uma lista com pelomenos 5 usuarios', function (done) {
        chai.request(app)
        .get('/users')
        .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.total).to.be.at.least(5);
        done();
        });
    });
})