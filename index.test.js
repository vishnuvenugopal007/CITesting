const { expect } = require('chai')
const { describe, it, before, after } = require('mocha')
const app = require('../index.js')
const request = require('request')

const PORT = '3005'
const HOST = `http://localhost:${PORT}/notes`

let server;

describe('Notes API', () => {
  before(done => {
    server = app.listen();
    done();
  })
  describe('GET', () => {
    const options = { json: true }
    it('should send list of notes', done => {
      request.get(HOST, options, (err, res, body) => {
        expect(err).to.be.null;
        expect(body).to.be.deep.equal([]);
        if(!err && res.statusCode === 200){
          done();
        }
      })
    })
  })
  describe('POST', () => {
    it('should post a new note', done => {
      const options = { json: true}
      request.post(HOST,options, (err, res, body) => {
        expect(err).to.be.null
        expect(body).to.be.an('object')
        done();
        })
    })
  })
  after(done => {
   server.close();
   done();
  })
})
