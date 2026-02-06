import { Injectable } from "@angular/core";
import { BehaviorSubject, map, tap } from "rxjs";
import { ITask } from "../interfaces/task-interface";
import { ITaskFormControls } from "../interfaces/task-form-controls-interface";
import { TaskStatusEnum } from "../enums/task-status-enum";
import { GenerateUniqueId } from "../utils/generate-unique-id";
import { TaskStatus } from "../../types/task-status";
import { IComment } from "../interfaces/comment-interface";

@Injectable({
   providedIn: 'root'
})

export class TaskService {
   private todoTasks$ = new BehaviorSubject<ITask[]>(this.loadTasksFromLocalStorage(TaskStatusEnum.TODO));
   readonly todoTasks = this.todoTasks$.asObservable().pipe(
      map((tasks) => structuredClone(tasks)),
      tap((tasks) => this.saveTasksOnLocalStorage(TaskStatusEnum.TODO, tasks))
   );

   private inProgressTasks$ = new BehaviorSubject<ITask[]>(this.loadTasksFromLocalStorage(TaskStatusEnum.INPROGRESS));
   readonly inProgressTasks = this.inProgressTasks$.asObservable().pipe(
      map((tasks) => structuredClone(tasks)),
      tap((tasks) => this.saveTasksOnLocalStorage(TaskStatusEnum.INPROGRESS, tasks))
   );

   private doneTasks$ = new BehaviorSubject<ITask[]>(this.loadTasksFromLocalStorage(TaskStatusEnum.DONE));
   readonly doneTasks = this.doneTasks$.asObservable().pipe(
      map((tasks) => structuredClone(tasks)),
      tap((tasks) => this.saveTasksOnLocalStorage(TaskStatusEnum.DONE, tasks))
   );

   addTask(taskInfos: ITaskFormControls) {
      const newTask : ITask = {
         ...taskInfos,
         status: TaskStatusEnum.TODO,
         id: GenerateUniqueId(),
         comments: []
      }
      const currentList = this.todoTasks$.value;
      this.todoTasks$.next([...currentList, newTask])
   }

   updateTaskStatus(taskId: string, taskCurrentStatus: TaskStatus, taskNextStatus: TaskStatus) {
      const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
      const nextTaskList = this.getTaskListByStatus(taskNextStatus);
      const currentTask = currentTaskList.value.find((task: ITask) => task.id === taskId);

      if(currentTask){
         //Update status 
         currentTask.status = taskNextStatus;

         //Remove task from current list
         const currentTaskListFiltered = currentTaskList.value.filter(task => task.id !== taskId)
         currentTaskList.next([...currentTaskListFiltered]);

         //Add task on new list
         nextTaskList.next([...nextTaskList.value, {...currentTask}]);
      }
   }

   private getTaskListByStatus(taskStatus: TaskStatus) {
      const taskListObj = {
         [TaskStatusEnum.TODO]: this.todoTasks$,
         [TaskStatusEnum.INPROGRESS]: this.inProgressTasks$,
         [TaskStatusEnum.DONE]: this.doneTasks$,
      };
      return taskListObj[taskStatus];
   }

   updateTaskInfos( taskId: string, taskCurrentStatus: TaskStatus, newTaskName: string, newTaskDescription: string){
      const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
      const currentTaskIdx = currentTaskList.value.findIndex(task => task.id == taskId);

      if(currentTaskIdx >= 0){
         const updatedTaskList = [...currentTaskList.value];
         updatedTaskList[currentTaskIdx] = {
            ...updatedTaskList[currentTaskIdx],
            name: newTaskName,
            description: newTaskDescription,
         };
         currentTaskList.next(updatedTaskList);
      }
   }

   updateTaskComments (taskId: string, taskCurrentStatus: TaskStatus, newTaskComments: IComment[]){
      const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
      const currentTaskIdx = currentTaskList.value.findIndex(task => task.id == taskId);

      if(currentTaskIdx >= 0){
         const updatedTaskList = [...currentTaskList.value];
         updatedTaskList[currentTaskIdx] = {
            ...updatedTaskList[currentTaskIdx],
            comments: newTaskComments,
         };
         currentTaskList.next(updatedTaskList);
      }
   }

   deleteTask(taskId: string, taskCurrentStatus: TaskStatus){
      const currentTaskList = this.getTaskListByStatus(taskCurrentStatus);
      const currentTaskListFiltered = currentTaskList.value.filter(task => task.id !== taskId)
      currentTaskList.next([...currentTaskListFiltered]);
   }

   private saveTasksOnLocalStorage(key: string, tasks: ITask[]){
      try{
         localStorage.setItem(key, JSON.stringify(tasks));
      } catch (error) {
         console.error('Error saving tasks on localStorage', error);
      }
   }

   private loadTasksFromLocalStorage(key: string): ITask[] {
      try{
         const storageTasks = localStorage.getItem(key);
         return storageTasks ? JSON.parse(storageTasks) : [];
      } catch (error) {
         console.error('Error loading tasks from localStorage', error);
         return [];
      }
   }
}