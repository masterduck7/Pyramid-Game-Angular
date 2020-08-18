import { Component, OnInit, NgModule } from '@angular/core';
import { ClrIconModule } from '@clr/angular';
import { Title } from "@angular/platform-browser";

@NgModule({
  imports: [ClrIconModule]
})

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
