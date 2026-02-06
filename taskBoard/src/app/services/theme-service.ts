import { Injectable, signal } from '@angular/core';
import { ITheme } from '../interfaces/theme-interface';

@Injectable({
   providedIn: 'root'
})
export class ThemeService {
   private readonly themes: ITheme[] = [
      {
         name: 'indigo',
         primary: '29 78 216',
         secondary: '147 197 253',
         accent: '2 6 23',
         lightBase: '243 244 246',
         welcomeImage: "blue-setup.png"
      },
      {
         name: 'rose',
         primary: '225 29 72',
         secondary: '253 164 175',
         accent: '76 5 25',
         lightBase: '255 250 250',
         welcomeImage: "pink-setup.png"
      },
      {
         name: 'seagrass',
         primary: '16 185 129',
         secondary: '165 248 238',
         accent: '2 44 34',
         lightBase: '240 253 250',
         welcomeImage: "green-setup.png"
      },
      {
         name: 'orange',
         primary: '249 115 22',
         secondary: '253 186 116',
         accent: '67 20 7',
         lightBase: '255 250 240',
         welcomeImage: "orange-setup.png"
      }
   ];

   currentTheme = signal<ITheme>(this.themes[0]);

   shuffleTheme() {
      const availableThemes = this.themes.filter(t => t.name !== this.currentTheme().name);
      const randomIndex = Math.floor(Math.random() * availableThemes.length);
      const newTheme = availableThemes[randomIndex];
      
      this.currentTheme.set(newTheme);
      this.applyTheme(newTheme);
   }

   private applyTheme(theme: ITheme) {
      const root = document.documentElement;
      root.style.setProperty('--color-primary', theme.primary);
      root.style.setProperty('--color-secondary', theme.secondary);
      root.style.setProperty('--color-accent', theme.accent);
      root.style.setProperty('--gradient-bg', `linear-gradient(135deg, rgb(${theme.lightBase}) 0%, rgb(${theme.secondary}) 100%)`);
}
}