import { Component } from '@angular/core';
import {LucideAngularModule, CirclePlus, X, SquarePen } from "lucide-angular";

@Component({
  selector: 'app-task-form-modal',
  imports: [LucideAngularModule],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly CirclePlus = CirclePlus;
  readonly X = X;
  readonly SquarePen = SquarePen;
}