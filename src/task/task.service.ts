import { Injectable } from '@nestjs/common';
import { PrismaServices } from 'src/prisma/prisma.services';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private primsa: PrismaServices) {}

  //CREACION DE METODO PARA TRAER UNA LISTA DE TAREAS
  async getAllTasks(): Promise<Task[]> {
    return this.primsa.task.findMany();
  }

  //METODO PARA TRAER UNA TAREA EN BASE A UN ID
  async getTaskById(id: number): Promise<Task> {
    return this.primsa.task.findUnique({
      where: {
        id,
      },
    });
  }

  //CREACION DE TAREAS
  async createTask(data: Task): Promise<Task> {
    return this.primsa.task.create({
      data: data,
    });
  }

  //ACTUALIZACION DE TAREAS
  async updateTask(id: number, data: Task): Promise<Task> {
    return this.primsa.task.update({
      where: {
        id,
      },
      data,
    });
  }

  //ELIMINACION DE TAREAS
  async deleteTask(id: number): Promise<Task> {
    return this.primsa.task.delete({
      where: {
        id,
      },
    });
  }
}
