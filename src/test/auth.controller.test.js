import supertest from 'supertest';
import app from '../app';

const request = supertest.agent(app)

describe('Testing autenticación de usuarios',()=>{

  let data = {
    email:"docente1@elearning.com",
    password:"123456"
  }

  it('Test para la autenticación de usuarios', async done =>{
    const response =  await request.post('/api/auth').set('Accept', 'application/json').send(data);
    expect(response.body,).toHaveProperty(
      'token'
    );
    expect(response.status).toBe(200);

    done()

  })
})