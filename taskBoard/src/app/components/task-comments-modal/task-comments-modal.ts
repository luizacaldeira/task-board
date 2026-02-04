import { L } from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { LucideAngularModule, X, SquareStar  } from 'lucide-angular';

@Component({
  selector: 'app-task-comments-modal',
  imports: [LucideAngularModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  readonly X = X;
  readonly SquareStar  = SquareStar ;
}
