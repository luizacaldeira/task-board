import { Injectable, signal } from '@angular/core';
import { ITheme } from '../interfaces/theme-interface';

@Injectable({
   providedIn: 'root'
})
export class ThemeService {
   private readonly themes: ITheme[] = [
      {
      name: 'indigo',
      primary: '59 130 246',   
      secondary: '191 219 254', 
      accent: '15 23 42',         
      lightBase: '239 246 255',  
      bgImage: "/teal-blue.webp"
      },
      {
      name: 'rose',
      primary: '244 63 94',     
      secondary: '253 164 175',   
      accent: '74 4 25',        
      lightBase: '255 241 242',   
      bgImage: "/orange-pink.webp"
      },
      {
      name: 'seagrass',
      primary: '16 185 129',     
      secondary: '153 246 228', 
      accent: '4 47 46',          
      lightBase: '236 253 245',  
      bgImage: "/teal.webp"
      },
      {
      name: 'lilac',
      primary: '139 92 246',      
      secondary: '196 181 253',   
      accent: '46 16 101',        
      lightBase: '245 243 255',   
      bgImage: "/lilac.webp"
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
      root.style.setProperty('--gradient-bg', `url(${theme.bgImage})`);
}
}