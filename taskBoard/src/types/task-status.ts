import { TaskStatusEnum } from "../app/enums/task-status-enum";

export type TaskStatus = TaskStatusEnum.TODO | TaskStatusEnum.INPROGRESS | TaskStatusEnum.DONE; 
