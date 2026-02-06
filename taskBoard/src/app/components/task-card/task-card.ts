import { Component, ElementRef, HostListener, inject, Input } from '@angular/core';
import { LucideAngularModule, Trash, MessageCircle, Pen, EllipsisVertical } from 'lucide-angular';
import { ModalControllerService } from '../../services/modal-controller-service';
import { ITask } from '../../interfaces/task-interface';
import { TaskService } from '../../services/task-service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [LucideAngularModule, SlicePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {

  // Icons
  readonly Trash = Trash;
  readonly MessageCircle = MessageCircle;
  readonly Pen = Pen;
  readonly EllipsisVertical = EllipsisVertical;

  // Services
  private readonly elementRef = inject(ElementRef);
  private readonly _modalService = inject(ModalControllerService);
  private readonly _taskService = inject(TaskService);

  // State
  menuOpen = false;

  @Input({ required: true }) task!: ITask;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  deleteTask() {
    this._taskService.deleteTask(this.task.id, this.task.status);
  }

  // Menu Methods
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Modal Methods
  openEditModal() {
    this.closeMenu();
    const dialogRef = this._modalService.openEditTaskModal({
      name: this.task.name,
      description: this.task.description,
    });
    dialogRef.closed.subscribe((taskForm)=>{
      console.log('Task Edited:', taskForm);
      if(taskForm){
        this._taskService.updateTaskInfos(
          this.task.id,
          this.task.status,
          taskForm.name,
          taskForm.description,
        )
      }
    })
  }

  openCommentsModal() {
    const dialogRef = this._modalService.openTaskCommentsModal(this.task);
    dialogRef.closed.subscribe((taskCommentsChanged) => {
      if(taskCommentsChanged){
        this._taskService.updateTaskComments(this.task.id, this.task.status, this.task.comments);
      }
    });
  }
}