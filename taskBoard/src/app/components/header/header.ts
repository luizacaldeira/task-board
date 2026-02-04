import { Component } from '@angular/core';
import { CircleCheckBig, Bell,  LucideAngularModule, LogOut  } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly CircleCheckBig = CircleCheckBig;
  readonly Bell = Bell;
  readonly LogOut = LogOut;
}