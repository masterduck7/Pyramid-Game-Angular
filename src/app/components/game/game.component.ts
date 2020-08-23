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
  userDrinks:object[] = [];
  structure:object[][] = [];
  lastCard:number;
  userCardList:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  userCardsInGame:string[] = [];
  userCardsInGameBackup:string[] = [];
  boardCardList:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  constructor(private route: Router) { }

  ngOnInit() {
    this.mode = localStorage.getItem('pyramid_mode')
    this.height = localStorage.getItem('pyramid_height')
    this.mode = localStorage.getItem('pyramid_mode')
    this.players = JSON.parse(localStorage.getItem('pyramid_users')) || []
    localStorage.setItem('pyramid_lastcard','0')
    this.setUserCards();
    this.onlyCardsInBoard();
    this.setStructure(this.mode);
    this.setUsers(this.players);
    this.updateUserDrinks();
  }

  setUserCards() {
    this.players.forEach(user => {
      let card1:string = this.setCards('user',this.mode);
      let card2:string = this.setCards('user',this.mode);
      this.userCardsInGame.push(card1);
      this.userCardsInGame.push(card2);
      this.userCardsInGameBackup.push(card1);
      this.userCardsInGameBackup.push(card2);
    });
  }

  onlyCardsInBoard() {
    let cardsInGame:string[] = [];
    this.userCardsInGame.forEach(card => {
      if (!cardsInGame.includes(card)) {
        cardsInGame.push(card);
        cardsInGame.push(card);
        cardsInGame.push(card);
        cardsInGame.push(card); 
      }
    });
    this.userCardsInGame = cardsInGame;
  }

  reUseCards() {
    let randomCard:string = this.userCardsInGameBackup[Math.floor(Math.random()*this.userCardsInGameBackup.length)];
    return randomCard; 
  }

  setCards(type:string, mode:string) {
    if (type === 'board') {
      if (mode === 'Hard') {
        if (this.userCardsInGame.length === 0) {
          return this.reUseCards();
        }
        let randomCard:string = this.userCardsInGame[Math.floor(Math.random()*this.userCardsInGame.length)];
        // Remove cards from list
        let new_card_list:string[] = this.userCardsInGame;
        for (let index = 0; index < new_card_list.length; index++) {
            if ( randomCard === new_card_list[index] ) {
                delete new_card_list[index]
                break
            }
        }
        // Remove undefined items
        const new_card_list_clean = []
        for (let index = 0; index < new_card_list.length; index++) {
            if ( new_card_list[index] !== undefined ) {
                new_card_list_clean.push(new_card_list[index])
            }
        }
        this.userCardsInGame = new_card_list_clean
        return randomCard; 
      }else if (mode === 'Normal') {
        let randomCard:string = this.boardCardList[Math.floor(Math.random()*this.boardCardList.length)];
        // Remove cards from list
        let new_card_list:string[] = this.boardCardList;
        for (let index = 0; index < new_card_list.length; index++) {
            if ( randomCard === new_card_list[index] ) {
                delete new_card_list[index]
                break
            }
        }
        // Remove undefined items
        const new_card_list_clean = []
        for (let index = 0; index < new_card_list.length; index++) {
            if ( new_card_list[index] !== undefined ) {
                new_card_list_clean.push(new_card_list[index])
            }
        }
        this.boardCardList = new_card_list_clean
        return randomCard; 
      }
    }else if (type === 'user') {
      let randomCard:string = this.userCardList[Math.floor(Math.random()*this.userCardList.length)];
      // Remove cards from list
      let new_card_list:string[] = this.userCardList;
      for (let index = 0; index < new_card_list.length; index++) {
          if ( randomCard === new_card_list[index] ) {
              delete new_card_list[index]
              break
          }
      }
      // Remove undefined items
      const new_card_list_clean = []
      for (let index = 0; index < new_card_list.length; index++) {
          if ( new_card_list[index] !== undefined ) {
              new_card_list_clean.push(new_card_list[index])
          }
      }
      this.userCardList = new_card_list_clean
      return randomCard; 
    }else {
      return '';
    }
  }

  setStructure(mode:string){
    let set_structure:object[][] = [];
    let cont:number = 0;
    for (let index = Number(this.height); index > 0; index--) {
      let row:object[] = [];
      for (let data = 0; data < index; data++) {
        row.push({card: this.setCards('board',mode), number: cont})
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
    this.addDrinks("a", 1)
    if (item + 1 === this.lastCard) {
      this.finish()
    }
  }

  addDrinks(user:string, numberDrinks:number) {
    let beforeDrinks:string = localStorage.getItem('pyramid_user_' + user)
    let newDrinks:number = Number(beforeDrinks) + numberDrinks
    localStorage.setItem('pyramid_user_' + user, newDrinks.toString())
    this.updateUserDrinks();
  }

  updateUserDrinks() {
    let userDrinks:object[] = []
    this.userList.forEach(user => {
      let userData:object = {name: user, drinks : localStorage.getItem('pyramid_user_' + user)}
      userDrinks.push(userData)
    });
    this.userDrinks = userDrinks;
  }

  userMoreDrinks() {
    let maxDrinks:number = -1
    let maxDrinksUser:string = ''
    this.userList.forEach(user => {
      let drinks:number =  Number(localStorage.getItem('pyramid_user_' + user))
      if (drinks > maxDrinks) {
        maxDrinks = drinks
        maxDrinksUser = user
      }
    });
    return [maxDrinksUser, maxDrinks];
  }

  finish() {
    let userDrinks = this.userMoreDrinks()
    alert('The winner is => ' + userDrinks[0] + ' with ' + userDrinks[1] + ' drinks !!!')
    localStorage.removeItem('pyramid_height')
    localStorage.removeItem('pyramid_mode')
    localStorage.removeItem('pyramid_users')
    localStorage.removeItem('pyramid_lastcard')
    this.userList.forEach(user => {
      localStorage.removeItem('pyramid_user_' + user)
    });
    this.route.navigate(['/']);
  }

}
