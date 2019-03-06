import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: string[] = [
    'Plants',
    'Notes',
    'Calendar', 
    'Materials',
    'Logged In'
  ]

  constructor() { }

  ngOnInit() {
  }

}
