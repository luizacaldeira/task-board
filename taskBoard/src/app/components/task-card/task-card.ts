import { Component, ElementRef, HostListener } from '@angular/core';
import {LucideAngularModule, Trash, MessageCircle, Pen, EllipsisVertical, X } from 'lucide-angular';

@Component({
  selector: 'app-task-card',
  imports: [LucideAngularModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})

export class TaskCard {
  // Icons
  readonly Trash = Trash;
  readonly MessageCircle  = MessageCircle ;
  readonly Pen = Pen;
  readonly EllipsisVertical = EllipsisVertical;
  readonly X = X;
  
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }

  constructor(private elementRef: ElementRef) {}
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}