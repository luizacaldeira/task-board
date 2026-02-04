import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list-section',
  imports: [LucideAngularModule, TaskCard],
  templateUrl: './task-list-section.html',
  styleUrl: './task-list-section.css',
})
export class TaskListSection {

}
