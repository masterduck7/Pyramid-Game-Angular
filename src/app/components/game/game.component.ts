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
  cardInGame:string = '0';
  lastCard:number;
  numberCardsInGame:number;
  userCardList:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  boardCardList:string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q","K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
  "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  userCardsInGame:string[] = [];
  modalRules:boolean = false;
  userRules:string = '';
  modalWinners:boolean = false;
  winners:string = '';
  modalCard:boolean = false;
  cardPlayed:string = '';
  userPlayed:string = '';
  action:string = '';
  actualRow:string = '';
  shots:string = '';

  constructor(private route: Router) { }

  ngOnInit() {
    this.mode = localStorage.getItem('pyramid_mode')
    this.height = localStorage.getItem('pyramid_height')
    this.mode = localStorage.getItem('pyramid_mode')
    this.players = JSON.parse(localStorage.getItem('pyramid_users')) || []
    this.setGame(this.mode);
  }

  setGame(mode:string){
    this.setUserVars(this.players);
    if (mode === 'Hard') {
      this.setNumberCardsInGame();
      this.setUserCards('Hard');
      if (this.numberCardsInGame > this.userCardsInGame.length) {
        let diff:number = this.numberCardsInGame - this.userCardsInGame.length;
        this.fillBoard(diff);
      }
      this.setStructure('Hard');
    }else if (mode === 'Normal') {
      this.setNumberCardsInGame();
      this.setUserCards('Normal');
      this.setStructure('Normal');
    }
  }

  setNumberCardsInGame() {
    let number_cards:number = 0;
    for (let i = 1; i < Number(this.height) + 1; i++) {
      number_cards += i
    }
    this.numberCardsInGame = number_cards;
  }

  setUserCards(mode:string) {
    let userData:object[] = [];
    if (mode === 'Hard') {
      this.players.forEach(user => {
        let card1:string = this.setCards('user', mode, false);
        let card2:string = this.setCards('user', mode, false);
        userData.push({'name': user['name'], 'cards': [card1, card2]})
        if (!this.userCardsInGame.includes(card1)) {
          this.userCardsInGame.push(card1);
          this.userCardsInGame.push(card1);
          this.userCardsInGame.push(card1);
          this.userCardsInGame.push(card1);  
        }
        if (!this.userCardsInGame.includes(card2)) {
          this.userCardsInGame.push(card2);
          this.userCardsInGame.push(card2);
          this.userCardsInGame.push(card2);
          this.userCardsInGame.push(card2);  
        }
      });
    }else if (mode === 'Normal') {
      this.players.forEach(user => {
        let card1:string = this.setCards('user', mode, false);
        let card2:string = this.setCards('user', mode, false);
        userData.push({'name': user['name'], 'cards': [card1, card2]})
        if (!this.userCardsInGame.includes(card1)) {
          this.userCardsInGame.push(card1);
        }
        if (!this.userCardsInGame.includes(card2)) {
          this.userCardsInGame.push(card2);
        }
      });
    }
    this.setUserDrinks(userData);
  }

  // Fill Board
  // If diff cards > 7 , fill with 'all drinks' and 7 repeated cards from users
  fillBoard(diff:number) {
    let originalCards:string[] = this.userCardsInGame;
    let diffCards:number = diff;
    if (diff > 7) {
      diffCards = 7
      for (let i = 0; i < diff - 7; i++) {
        this.userCardsInGame.push('0')
      }
    }
    for (let i = 0; i < diffCards; i++) {
      let randomCard:string = originalCards[Math.floor(Math.random()*originalCards.length)];
      this.userCardsInGame.push(randomCard)
    }
  }

  setUserVars(users) {
    let userList:string[] = []
    users.forEach(user => {
      userList.push(user.name)
      localStorage.setItem('pyramid_user_' + user.name, '0')
    });
    this.userList = userList;
  }

  // Set structure by mode
  // If normal and card without user fill with 'all drinks' card
  setStructure(mode:string){
    let set_structure:object[][] = [];
    let cont:number = this.numberCardsInGame;
    let rowNumber:number = Number(this.height) - 1;
    let type:boolean = true;
    for (let index = 1; index < Number(this.height) + 1; index++) {
      let row:object[] = [];
      for (let data = 0; data < index; data++) {
        if (index === 1) {
          row.push({card: this.setCards('board', mode, true), number: cont - 1, row: rowNumber, type: type})
          cont = cont - 1;
        }else {
          row.push({card: this.setCards('board', mode, false), number: cont - 1, row: rowNumber, type: type})
          cont = cont - 1;
        }
      }
      type = !type;
      rowNumber = rowNumber - 1;
      set_structure.push(row.reverse())
    }
    this.lastCard = this.numberCardsInGame;
    this.structure = set_structure
  }

  // Set cards, first card never is 'all drinks'
  // 5 tries to get another card. If not found put all drinks card
  setCards(type:string, mode:string, first:boolean) {
    if (type === 'board') {
      if (mode === 'Hard') {
        let randomCard:string = this.userCardsInGame[Math.floor(Math.random()*this.userCardsInGame.length)];
        if (first) {
          let cont:number = 0;
          while (cont < 5) {
            let card:string = this.userCardsInGame[Math.floor(Math.random()*this.userCardsInGame.length)];
            if (card !== '0') {
              randomCard = card;
              cont = 5;
            }
          }
        }
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
        if (first) {
          let cont:number = 0;
          while (cont < 5) {
            let card:string = this.boardCardList[Math.floor(Math.random()*this.boardCardList.length)];
            if (this.userCardsInGame.includes(card)) {
              randomCard = card;
              cont = 5;
            }
          }
        }
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
        if (!this.userCardsInGame.includes(randomCard)) {
          return '0'
        }else {
          return randomCard;
        }
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

  checkCard(id) {
    if (this.cardInGame != id) {
      return true
    }else{
      return false
    }
  }

  playCard(item) {
    if (this.ruleTime()) {
      this.createRule();
      this.cardInGame = (Number(this.cardInGame) + 1).toString()
      this.cardPlayed = "../../../assets/Cards/" + item.card + ".png";
      if (item.card === '0') {
        this.userPlayed = 'All'
        this.action = 'drinks';
        this.userDrinks.forEach(user => {
          this.addDrinks(user['name'], item.row + 1)
        });
      }else {
        let users:string[] = this.getUsersWithCard(item['card']);
        if (item.type) {
          users.forEach(user => {
            this.addDrinks(user, item.row + 1)
          });
        }
        this.userPlayed = users.join(', ');
        if (item.type) {
          this.action = 'drinks';
        }else {
          this.action = 'gives';
        }
      }
      this.actualRow = item.row + 1;
      if (item.row === 0) {
        this.shots = 'shot !'
      }else {
        this.shots = 'shots !'
      }
    }else {
      this.cardInGame = (Number(this.cardInGame) + 1).toString()
      this.cardPlayed = "../../../assets/Cards/" + item.card + ".png";
      if (item.card === '0') {
        this.userPlayed = 'All'
        this.action = 'drinks';
        this.userDrinks.forEach(user => {
          this.addDrinks(user['name'], item.row + 1)
        });
      }else {
        let users:string[] = this.getUsersWithCard(item['card']);
        if (item.type) {
          users.forEach(user => {
            this.addDrinks(user, item.row + 1)
          });
        }
        this.userPlayed = users.join(', ');
        if (item.type) {
          this.action = 'drinks';
        }else {
          this.action = 'gives';
        }
      }
      this.actualRow = item.row + 1;
      if (item.row === 0) {
        this.shots = 'shot !'
      }else {
        this.shots = 'shots !'
      }
      this.modalCard = true;
    }
    
  }

  getUsersWithCard(card:string) {
    let users:string[] = [];
    this.userDrinks.forEach(user => {
      if (user['cards'].includes(card)) {
        users.push(user['name'])
      }
    });
    return users;
  }

  addDrinks(user:string, numberDrinks:number) {
    let beforeDrinks:string = localStorage.getItem('pyramid_user_' + user)
    let newDrinks:number = Number(beforeDrinks) + numberDrinks
    localStorage.setItem('pyramid_user_' + user, newDrinks.toString())
    this.updateUserDrinks();
  }

  setUserDrinks(userData:object[]) {
    let userDrinks:object[] = []
    userData.forEach(user => {
      let userData:object = {name: user['name'], cards: user['cards'], drinks : localStorage.getItem('pyramid_user_' + user['name'])}
      userDrinks.push(userData)
    });
    this.userDrinks = userDrinks;
  }

  updateUserDrinks() {
    let userDrinks:object[] = []
    this.userDrinks.forEach(user => {
      let userData:object = {name: user['name'], cards: user['cards'], drinks : localStorage.getItem('pyramid_user_' + user['name'])}
      userDrinks.push(userData)
    });
    userDrinks.sort((a, b) => {
      return b['drinks'] - a['drinks'];
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
      }else if (drinks === maxDrinks) {
        maxDrinksUser = maxDrinksUser + ',' + user
      }
    });
    this.winners = maxDrinksUser + ' with ' + maxDrinks + ' drinks !!!';
    this.modalWinners = true;
  }

  finish() {
    this.userMoreDrinks()
    localStorage.removeItem('pyramid_height')
    localStorage.removeItem('pyramid_mode')
    localStorage.removeItem('pyramid_users')
    this.userList.forEach(user => {
      localStorage.removeItem('pyramid_user_' + user)
    });
  }

  closeModalWinners() {
    this.modalWinners = false;
    this.route.navigate(['/']);
  }

  closeModalCard() {
    this.modalCard = false;
    if (Number(this.cardInGame) === this.lastCard) {
      this.finish()
    }
  }

  closeModalRules() {
    this.modalRules = false;
    this.modalCard = true;
  }

  // Choose random user
  createRule() {
    let randomUser:string = this.userList[Math.floor(Math.random()*this.userList.length)];
    this.userRules = randomUser;
    this.modalRules = true;
  }

  // Rule created after 10 cards
  ruleTime() {
    if (Number.isInteger((Number(this.cardInGame) + 1)/10)) {
      return true;
    }else {
      return false;
    }
  }
}
