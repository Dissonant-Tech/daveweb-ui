import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  // Links example
  @Input()
  links = [
    {
      name: 'Home',
      route: '/home'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
