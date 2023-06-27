const request =  require('supertest')
const server =  require('../index')

describe('Get Endpoints', () => {
    it('Get', async () => {
        const res =  await  request(server)
        .get('/')
        .send({
            userId:  1,
            title:  'test is cool',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('nome');
       
    })
})
describe('Get Endpoints test', () => {
    it('Get', async () => {
        const res =  await  request(server)
        .get('/test')
        .send({
            userId:  1,
            title:  'test is cool',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('nome');
       
    })
})
afterAll(async()  => {
    // close server conection
    server.close();
    
});