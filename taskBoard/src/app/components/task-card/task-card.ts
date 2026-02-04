import { Component } from '@angular/core';
import {LucideAngularModule, Trash, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-task-card',
  imports: [LucideAngularModule],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard {
  readonly Trash = Trash;
  readonly MessageCircle  = MessageCircle ;
}