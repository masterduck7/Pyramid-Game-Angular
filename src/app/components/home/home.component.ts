import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Pyramid Game");
  }

  ngOnInit(): void {
  }

}
