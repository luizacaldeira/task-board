import { Component, inject } from '@angular/core';
import { Header } from './components/header/header';
import { MainContent } from './components/main-content/main-content';
import { ThemeService } from './services/theme-service';

@Component({
  selector: 'app-root',
  imports: 
  [
    Header,
    MainContent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly _themeService = inject(ThemeService);

}
