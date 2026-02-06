import { Component, inject } from '@angular/core';
import { CircleCheckBig, LucideAngularModule, PaintBucket } from 'lucide-angular';
import { ThemeService } from '../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly CircleCheckBig = CircleCheckBig;
  readonly PaintBucket = PaintBucket 
  private readonly _themeService = inject(ThemeService);

  shuffleColors() {
    this._themeService.shuffleTheme();
  }
}