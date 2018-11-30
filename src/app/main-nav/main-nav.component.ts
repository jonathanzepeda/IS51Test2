import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  showToast() {
    this.toastService.showToast('success', 3000, 'This application was created by Jonathan Zepeda. (C) 2018');
  }



}
