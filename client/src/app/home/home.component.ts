import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public user: any;

  constructor(private ms: MainService) {
    if (ms.get_participant()) {
      this.user = ms.get_participant();
    }
  }

  exit() {
    localStorage.clear();
    window.location.href = '/';
  }
}
