import { Component, inject } from '@angular/core';
import { LucideAngularModule, Sparkle } from "lucide-angular";
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-welcome-section',
  imports: [LucideAngularModule],
  templateUrl: './welcome-section.html',
  styleUrl: './welcome-section.css',
})
export class WelcomeSection {
  readonly Sparkle = Sparkle;
  readonly _themeService = inject(ThemeService);
}
