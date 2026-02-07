import { Component, inject } from '@angular/core';
import { WelcomeSection } from '../welcome-section/welcome-section';
import { TaskListSection } from '../task-list-section/task-list-section';
import { CirclePlus, LucideAngularModule } from 'lucide-angular';
import { ModalControllerService } from '../../services/modal-controller-service';
import { TaskService } from '../../services/task-service';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-main-content',
  imports: [WelcomeSection, TaskListSection, LucideAngularModule],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {
  readonly CirclePlus = CirclePlus;

  private readonly _modalControllerService = inject(ModalControllerService);
  private readonly _taskService = inject(TaskService);
  readonly _themeService = inject(ThemeService);

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
