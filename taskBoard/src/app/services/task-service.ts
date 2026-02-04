import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITask } from "../interfaces/task-interface";

@Injectable({
   providedIn: 'root'
})

export class TaskService {
   private todoTasks$ = new BehaviorSubject<ITask[]>([]);
   readonly todoTasks = this.todoTasks$.asObservable();

   private inProgressTasks$ = new BehaviorSubject<ITask[]>([]);
   readonly inProgressTasks = this.inProgressTasks$.asObservable();

   private doneTasks$ = new BehaviorSubject<ITask[]>([]);
   readonly doneTasks = this.doneTasks$.asObservable();
}