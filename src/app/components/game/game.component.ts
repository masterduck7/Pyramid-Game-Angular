import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  height:string;
  mode:string;
  players:string[];
  userList:string[];
  structure:number[][] = [];
  lastCard:number;

  constructor(private route: Router) { }

  ngOnInit() {
    this.height = localStorage.getItem('pyramid_height')
    this.mode = localStorage.getItem('pyramid_mode')
    this.players = JSON.parse(localStorage.getItem('pyramid_users')) || []
    localStorage.setItem('pyramid_lastcard','0')
    this.setStructure();
    this.setUsers(this.players);
  }

  setStructure(){
    let set_structure:number[][] = [];
    let cont:number = 0;
    for (let index = Number(this.height); index > 0; index--) {
      let row:number[] = [];
      for (let data = 0; data < index; data++) {
        row.push(cont)
        cont = cont + 1;
      }
      set_structure.push(row)
    }
    this.lastCard = cont;
    this.structure = set_structure
  }

  setUsers(users) {
      let userList:string[] = []
      users.forEach(user => {
        userList.push(user.name)
        localStorage.setItem('pyramid_user_' + user.name, '0')
      });
      this.userList = userList;
  }

  checkCard(id) {
    let lastCardPlayed:string = localStorage.getItem('pyramid_lastcard');
    if (lastCardPlayed != id) {
      return true
    }else{
      return false
    }
  }

  playCard(item) {
    let lastCardPlayed:string = localStorage.getItem('pyramid_lastcard');
    let newCard:number = Number(lastCardPlayed) + 1
    localStorage.setItem('pyramid_lastcard',newCard.toString())
    if (item + 1 === this.lastCard) {
      this.finish()
    }
  }

  finish() {
    alert("Finished")
    localStorage.removeItem('pyramid_height')
    localStorage.removeItem('pyramid_mode')
    localStorage.removeItem('pyramid_users')
    localStorage.removeItem('pyramid_lastcard')
    this.userList.forEach(user => {
      localStorage.removeItem('pyramid_user_'+user)
    });
    this.route.navigate(['/']);
  }

}
