import supertest from 'supertest';
import app from '../app';

const request = supertest.agent(app)

describe('Testing para probar codigo',()=>{
let data = {
  id_lenguaje : "56",
  codeEditor:"console.log('Esta es una prueba unitaria')"
}

it('Test para la compilación de codigo', async done =>{
  const response =  await request.post('/api/code_editor/ejecutar').set('Accept', 'application/json').send(data);
  expect(response.status).toBe(200);
  done();

})

})