import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public user: any;
  public showToggle = false;
  public open = true;
  public backdrop = false;
  public hideMenu = true;
  public screenWidthListner = 0;
  public staffMenu: any;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidthListner = window.innerWidth;
    this.pageSizeListerner();
  }

  @HostListener('window:load', ['$event'])
  onPageLoad() {
    this.screenWidthListner = window.innerWidth;
    this.pageSizeListerner();
  }

  constructor(private router: Router, private ms: MainService) {
    this.user = ms.get_participant();
  }

  ngOnInit(): void {
    // this.user = this.authSericve.getUser();
  }

  toggleMenu(state: boolean) {
    if (!state) {
      setTimeout(() => {
        this.hideMenu = state;
      }, 300);
    } else {
      this.hideMenu = state;
    }
  }

  pageSizeListerner() {
    // 1200 for production
  }
}
