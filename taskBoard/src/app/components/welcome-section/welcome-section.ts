import { Component, inject } from '@angular/core';
import { LucideAngularModule, CirclePlus } from 'lucide-angular';
import { ModalControllerService } from '../../services/modal-controller-service';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-welcome-section',
  imports: [LucideAngularModule],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  readonly CirclePlus = CirclePlus;

  private readonly _modalControllerService = inject(ModalControllerService);
  private readonly _taskService = inject(TaskService);

  openCreateModal (){
    const dialogRef = this._modalControllerService.openNewTaskModal();

    dialogRef.closed.subscribe((taskForm)=> {
      console.log('New Task Created:', taskForm);
      if(taskForm) {
        this._taskService.addTask(taskForm);
      }
    })
  }
}
