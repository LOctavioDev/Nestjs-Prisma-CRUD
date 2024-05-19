import { Injectable } from "@nestjs/common";
import { PrismaServices } from "src/prisma/prisma.services";
import { Task } from "@prisma/client";

@Injectable()
export class TaskService{
    constructor(private primsa: PrismaServices){}

    async getAllTasks(): Promise<Task[]>{
        return this.primsa.task.findMany();
    }
}