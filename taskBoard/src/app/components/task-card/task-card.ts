import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { LucideAngularModule, Trash, MessageCircle, Pen, EllipsisVertical } from 'lucide-angular';
import { ModalControllerService } from '../../services/modal-controller-service';

@Component({
  selector: 'app-task-card',
  imports: [LucideAngularModule],
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
  private readonly modalService = inject(ModalControllerService);

  // State
  menuOpen = false;

  // Host Listeners
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
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
    const dialogRef = this.modalService.openEditTaskModal({
      name: "Task name",
      description: "Task description",
    });
    dialogRef.closed.subscribe((taskForm)=>{
      console.log('Task Edited:', taskForm);
    })
  }

  openCommentsModal() {
    this.modalService.openTaskCommentsModal();
  }
}