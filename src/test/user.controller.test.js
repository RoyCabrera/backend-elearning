import supertest from 'supertest';
import app from '../app';

const request = supertest.agent(app)

describe('Testing de mantenimiento de Usuarios',()=>{

  let data = {
    "name": "Usuario prueba",
    "last_name": "Apellido Prueba",
    "email": "testUsuario7@test.com",
    "password": "123456"
}
  it('Test de creación de usuario', async done =>{
    const response =  await request.post('/api/users').set('Accept', 'application/json').send(data);

        expect(response.body,).toHaveProperty(
          'message',
          'Usuario creado satisfactoriamente'
        );

        done()

  })

  let idUsuario = 240


  it('Test para convertir usuario en docente',async done=>{
    const response =  await request.put(`/api/users/convertirse_docente/${idUsuario}`);

        expect(response.body,).toHaveProperty(
          'message',
          'Felicidades ahora eres docente de la plataforma'
        );

        done()
  })
})