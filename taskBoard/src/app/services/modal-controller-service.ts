import { Dialog } from "@angular/cdk/dialog";
import { inject, Injectable } from "@angular/core";
import { TaskFormModal } from "../components/task-form-modal/task-form-modal";
import { TaskCommentsModal } from "../components/task-comments-modal/task-comments-modal";
import { ITaskFormControls } from "../interfaces/task-form-controls-interface";
import { form } from "@angular/forms/signals";
import { ITask } from "../interfaces/task-interface";

@Injectable({
   providedIn: 'root'
})

export class ModalControllerService {
   private readonly _dialog = inject(Dialog);

   private readonly modalSizeOptions = {
      maxWidth: '620px',
      width: '95%'
   }

   openNewTaskModal() {
      return this._dialog.open<ITaskFormControls>(TaskFormModal, {
         ...this.modalSizeOptions,
         disableClose: true,
         data: {
            mode:'create',
            formValues: { name: '', description: '' }
         }
      })
   }

   openEditTaskModal(formValues: ITaskFormControls) {
      return this._dialog.open<ITaskFormControls>(TaskFormModal, {
         ...this.modalSizeOptions,
         disableClose: true,
         data: {
            mode:'edit',
            formValues,
         }
      })
   }

   openTaskCommentsModal(task : ITask) {
      return this._dialog.open(TaskCommentsModal, {
         ...this.modalSizeOptions,
         disableClose: true,
         data: task,
      })
   }
}