import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  height:string;
  mode:string;
  players:string[];
  structure:string[][] = [];

  constructor() { }

  ngOnInit() {
    this.height = localStorage.getItem('pyramid_height')
    this.mode = localStorage.getItem('pyramid_mode')
    this.players = JSON.parse(localStorage.getItem('pyramid_users'))
    this.setStructure();
  }

  setStructure(){
    let sstructure:string[][] = [];
    for (let index = Number(this.height); index > 0; index--) {
      let row:string[] = [];
      for (let data = 0; data < index; data++) {
        row.push('X')
      }
      sstructure.push(row)
    }
    this.structure = sstructure
  }

}
