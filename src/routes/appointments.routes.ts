import { Router, request, response } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointments';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

//Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;


  const parseDate = parseISO(date);


  //return response.json(appointment);
  return Appointment
});

export default appointmentsRouter;
