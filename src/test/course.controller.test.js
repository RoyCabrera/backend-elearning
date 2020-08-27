import supertest from 'supertest';
import app from '../app';

const request = supertest.agent(app)

describe('Testing mantenimiento de Cursos',()=>{

  it('Test para obtener todos los cursos de la plataforma', async done =>{
    const response =  await request.get('/api/courses');
        expect(response.status).toBe(200);
        done();

  })

  let data = {
    courseId:73,
    userId:223
  }
  it('Test de inscripción a un curso', async done =>{
    const response =  await request.post('/api/courses/enroll').set('Accept', 'application/json').send(data);

        expect(response.body,).toHaveProperty(
          'message',
          'Se Inscribío correctamente'
        );

        done()

  })

  let course = {
    id:74,
    statusId:1
  }
  it('Test para cambiar estado del curso a publicado', async done =>{
    const response =  await request.put('/api/courses').set('Accept', 'application/json').send(course);

        expect(response.body,).toHaveProperty(
          'message',
          'curso actualizado'
        );

        done()

  })

  let idDocente = 170


  it('Test para obtener los cursos impartidos por el docente',async done=>{
    const response =  await request.get(`/api/cursos_impartidos/${idDocente}`);

    expect(response.status).toBe(200);
    done();

  })

  let idEstudiante = 178


  it('Test para obtener los cursos inscritos del estudiante',async done=>{
    const response =  await request.get(`/api/cursos_matriculados/${idEstudiante}`);

    expect(response.status).toBe(200);
    done();

  })



})