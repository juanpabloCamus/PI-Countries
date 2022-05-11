const chai = require('chai')
const chaiHttp = require('chai-http')
const  should = require('chai').should()
const app = require('../../src/app.js')
chai.use(chaiHttp);

describe('Countries Route', () => {
    it('It should GET all Countries', (done) => {
        chai.request(app)
        .get('/countries')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})

describe('Activities Route', () => {
    it('It should GET all Activities', (done) => {
        chai.request(app)
        .get('/activities')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})