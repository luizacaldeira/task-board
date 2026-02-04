import { Component } from '@angular/core';
import { LucideAngularModule, CirclePlus } from 'lucide-angular';
@Component({
  selector: 'app-welcome-section',
  imports: [LucideAngularModule],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  readonly CirclePlus = CirclePlus;
}
