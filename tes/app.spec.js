const app = require('../src/app')
const supertest = require('supertest')

const request = supertest(app)

test('a aplicação deve responder na porta 4000', async () => {
  return request.get('/').then(res => {
    const status = res.statusCode
    expect(status).toEqual(200)
  }).catch(err => {
    console.log(err)
  })
})