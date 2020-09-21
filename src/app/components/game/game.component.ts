import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  language: string = localStorage.getItem('pyramid_lang');
  height: string;
  mode: string;
  players: string[];
  userList: string[];
  userDrinks: object[] = [];
  structure: object[][] = [];
  cardInGame: string = '0';
  lastCard: number;
  numberCardsInGame: number;
  userCardList: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  boardCardList: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  userCardsInGame: string[] = [];
  setRule: number;
  modalRules: boolean = false;
  userRules: string = '';
  userWithoutRule: string[];
  modalWinners: boolean = false;
  winnerNames: string = '';
  winnerDrinks: string = '';
  modalCard: boolean = false;
  cardPlayed: string = '';
  userPlayed: string = '';
  userPlayedRepeated: string = '';
  action: string = '';
  actionRepeated: string = '';
  actualRow: string = '';
  shots: string = '';
  shotsRepeated: string = 'shots';
  modalWords: object;
  repeated: boolean = false;
  notRepeatedOnly: boolean = false;

  constructor(private route: Router, public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    let lang: string = localStorage.getItem('pyramid_lang')
    if (lang) {
      translate.setDefaultLang(lang);
    } else {
      translate.setDefaultLang('en');
      localStorage.setItem('pyramid_lang', 'en');
    }

  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('pyramid_lang', lang);
  }

  ngOnInit() {
    this.mode = localStorage.getItem('pyramid_mode')
    this.height = localStorage.getItem('pyramid_height')
    this.players = JSON.parse(localStorage.getItem('pyramid_users')) || []
    this.setGame(this.mode);
    this.setWords();
  }

  setGame(mode: string) {
    this.setUserVars(this.players);
    if (mode === 'Hard') {
      this.setNumberCardsInGame();
      this.setUserCards('Hard');
      if (this.numberCardsInGame > this.userCardsInGame.length) {
        let diff: number = this.numberCardsInGame - this.userCardsInGame.length;
        this.fillBoard(diff);
      }
      this.setStructure('Hard');
    } else if (mode === 'Normal') {
      this.setNumberCardsInGame();
      this.setUserCards('Normal');
      this.setStructure('Normal');
    }
    this.setRuleTime();
  }

  setNumberCardsInGame() {
    let number_cards: number = 0;
    for (let i = 1; i < Number(this.height) + 1; i++) {
      number_cards += i
    }
    this.numberCardsInGame = number_cards;
  }

  setUserCards(mode: string) {
    let userData: object[] = [];
    if (mode === 'Hard') {
      this.players.forEach(user => {
        let card1: string = this.setCards('user', mode, false);
        let card2: string = this.setCards('user', mode, false);
        userData.push({ 'name': user['name'], 'cards': [card1, card2] })
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
    } else if (mode === 'Normal') {
      this.players.forEach(user => {
        let card1: string = this.setCards('user', mode, false);
        let card2: string = this.setCards('user', mode, false);
        userData.push({ 'name': user['name'], 'cards': [card1, card2] })
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
  fillBoard(diff: number) {
    let originalCards: string[] = this.userCardsInGame;
    let diffCards: number = diff;
    if (diff > 7) {
      diffCards = 7
      for (let i = 0; i < diff - 7; i++) {
        this.userCardsInGame.push('0')
      }
    }
    for (let i = 0; i < diffCards; i++) {
      let randomCard: string = originalCards[Math.floor(Math.random() * originalCards.length)];
      this.userCardsInGame.push(randomCard)
    }
  }

  setUserVars(users) {
    let userList: string[] = []
    users.forEach(user => {
      userList.push(user.name)
      localStorage.setItem('pyramid_user_' + user.name, '0')
      localStorage.setItem('pyramid_user_gifts_' + user.name, '0')
    });
    this.userList = userList;
    this.userWithoutRule = userList;
  }

  // Set structure by mode
  // If normal and card without user fill with 'all drinks' card
  setStructure(mode: string) {
    let set_structure: object[][] = [];
    let cont: number = this.numberCardsInGame;
    let rowNumber: number = Number(this.height) - 1;
    let type: boolean = true;
    for (let index = 1; index < Number(this.height) + 1; index++) {
      let row: object[] = [];
      for (let data = 0; data < index; data++) {
        if (index === 1) {
          row.push({ card: this.setCards('board', mode, true), number: cont - 1, row: rowNumber, type: type })
          cont = cont - 1;
        } else {
          row.push({ card: this.setCards('board', mode, false), number: cont - 1, row: rowNumber, type: type })
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
  setCards(type: string, mode: string, first: boolean) {
    if (type === 'board') {
      if (mode === 'Hard') {
        let randomCard: string = this.userCardsInGame[Math.floor(Math.random() * this.userCardsInGame.length)];
        if (first) {
          let cont: number = 0;
          while (cont < 5) {
            let card: string = this.userCardsInGame[Math.floor(Math.random() * this.userCardsInGame.length)];
            if (card !== '0') {
              randomCard = card;
              cont = 5;
            }
          }
        }
        // Remove cards from list
        let new_card_list: string[] = this.userCardsInGame;
        for (let index = 0; index < new_card_list.length; index++) {
          if (randomCard === new_card_list[index]) {
            delete new_card_list[index]
            break
          }
        }
        // Remove undefined items
        const new_card_list_clean = []
        for (let index = 0; index < new_card_list.length; index++) {
          if (new_card_list[index] !== undefined) {
            new_card_list_clean.push(new_card_list[index])
          }
        }
        this.userCardsInGame = new_card_list_clean
        return randomCard;
      } else if (mode === 'Normal') {
        let randomCard: string = this.boardCardList[Math.floor(Math.random() * this.boardCardList.length)];
        if (first) {
          let cont: number = 0;
          while (cont < 5) {
            let card: string = this.boardCardList[Math.floor(Math.random() * this.boardCardList.length)];
            if (this.userCardsInGame.includes(card)) {
              randomCard = card;
              cont = 5;
            }
          }
        }
        // Remove cards from list
        let new_card_list: string[] = this.boardCardList;
        for (let index = 0; index < new_card_list.length; index++) {
          if (randomCard === new_card_list[index]) {
            delete new_card_list[index]
            break
          }
        }
        // Remove undefined items
        const new_card_list_clean = []
        for (let index = 0; index < new_card_list.length; index++) {
          if (new_card_list[index] !== undefined) {
            new_card_list_clean.push(new_card_list[index])
          }
        }
        this.boardCardList = new_card_list_clean
        if (!this.userCardsInGame.includes(randomCard)) {
          return '0'
        } else {
          return randomCard;
        }
      }

    } else if (type === 'user') {
      let randomCard: string = this.userCardList[Math.floor(Math.random() * this.userCardList.length)];
      // Remove cards from list
      let new_card_list: string[] = this.userCardList;
      for (let index = 0; index < new_card_list.length; index++) {
        if (randomCard === new_card_list[index]) {
          delete new_card_list[index]
          break
        }
      }
      // Remove undefined items
      const new_card_list_clean = []
      for (let index = 0; index < new_card_list.length; index++) {
        if (new_card_list[index] !== undefined) {
          new_card_list_clean.push(new_card_list[index])
        }
      }
      this.userCardList = new_card_list_clean
      return randomCard;
    } else {
      return '';
    }
  }

  checkCard(id) {
    if (this.cardInGame != id) {
      return true
    } else {
      return false
    }
  }

  playCard(item) {
    if (this.ruleTime()) {
      this.createRule();
      this.play(item);
    } else {
      this.play(item);
      this.modalCard = true;
    }

  }

  play(item) {
    this.notRepeatedOnly = true
    this.repeated = false
    this.cardInGame = (Number(this.cardInGame) + 1).toString()
    this.cardPlayed = "../../../assets/Cards/" + item.card + ".png";
    if (item.card === '0') {
      this.userPlayed = this.returnTranslation('All');
      this.action = this.returnTranslation('drinks');
      this.userDrinks.forEach(user => {
        this.addDrinks(user['name'], item.row + 1)
      });
    } else {
      let usersWithCard = this.getUsersWithCard(item['card']);
      let users: string[] = usersWithCard[0]
      let usersRepeated: string[] = usersWithCard[1]
      if (usersRepeated.length > 0) {
        this.repeated = true;
      }
      if (users.length === 0) {
        this.notRepeatedOnly = false
      }
      if (item.type) {
        users.forEach(user => {
          this.addDrinks(user, item.row + 1)
        });
        usersRepeated.forEach(user => {
          this.addDrinks(user, 2 * (item.row + 1))
        });
      } else {
        users.forEach(user => {
          this.addGifts(user, item.row + 1)
        })
        usersRepeated.forEach(user => {
          this.addGifts(user, 2 * (item.row + 1))
        })
      }
      this.userPlayed = users.join(', ');
      this.userPlayedRepeated = usersRepeated.join(', ');
      if (users.length > 1) {
        if (item.type) {
          this.action = this.returnTranslation('drinks');
        } else {
          this.action = this.returnTranslation('gives');
        }
      } else {
        if (item.type) {
          this.action = this.returnTranslation('drink');
        } else {
          this.action = this.returnTranslation('give');
        }
      }
      if (usersRepeated.length > 1) {
        if (item.type) {
          this.actionRepeated = this.returnTranslation('drinks');
        } else {
          this.actionRepeated = this.returnTranslation('gives');
        }
      } else {
        if (item.type) {
          this.actionRepeated = this.returnTranslation('drink');
        } else {
          this.actionRepeated = this.returnTranslation('give');
        }
      }
    }
    this.actualRow = item.row + 1;
    if (item.row === 0) {
      this.shots = this.returnTranslation('shot') + ' !';
    } else {
      this.shots = this.returnTranslation('shots') + ' !';
    }
  }

  getUsersWithCard(card: string) {
    let users: string[] = [];
    let usersRepeated: string[] = [];
    this.userDrinks.forEach(user => {
      var cont: number = 0
      user['cards'].forEach(card_user => {
        if (card_user === card) {
          cont += 1
        }
      });
      if (cont === 2) {
        usersRepeated.push(user['name'])
      } else if (cont === 1) {
        users.push(user['name'])
      }
    });
    return [users, usersRepeated];
  }

  addDrinks(user: string, numberDrinks: number) {
    let beforeDrinks: string = localStorage.getItem('pyramid_user_' + user)
    let newDrinks: number = Number(beforeDrinks) + numberDrinks
    localStorage.setItem('pyramid_user_' + user, newDrinks.toString())
    this.updateUserDrinksAndGifts();
  }

  addGifts(user: string, numberGifts: number) {
    let beforeGifts: string = localStorage.getItem('pyramid_user_gifts_' + user)
    let newGifts: number = Number(beforeGifts) + numberGifts
    localStorage.setItem('pyramid_user_gifts_' + user, newGifts.toString())
    this.updateUserDrinksAndGifts();
  }

  setUserDrinks(userData: object[]) {
    let userDrinks: object[] = []
    userData.forEach(user => {
      let userData: object = { name: user['name'], cards: user['cards'], drinks: localStorage.getItem('pyramid_user_' + user['name']), gifts: localStorage.getItem('pyramid_user_gifts_' + user['name']) }
      userDrinks.push(userData)
    });
    this.userDrinks = userDrinks;
  }

  updateUserDrinksAndGifts() {
    let userDrinks: object[] = []
    this.userDrinks.forEach(user => {
      let userData: object = { name: user['name'], cards: user['cards'], drinks: localStorage.getItem('pyramid_user_' + user['name']), gifts: localStorage.getItem('pyramid_user_gifts_' + user['name']) }
      userDrinks.push(userData)
    });
    userDrinks.sort((a, b) => {
      return b['drinks'] - a['drinks'];
    });
    this.userDrinks = userDrinks;
  }

  userMoreDrinks() {
    let maxDrinks: number = -1
    let maxDrinksUser: string = ''
    this.userList.forEach(user => {
      let drinks: number = Number(localStorage.getItem('pyramid_user_' + user))
      if (drinks > maxDrinks) {
        maxDrinks = drinks
        maxDrinksUser = user
      } else if (drinks === maxDrinks) {
        maxDrinksUser = maxDrinksUser + ',' + user
      }
    });
    this.winnerNames = maxDrinksUser;
    this.winnerDrinks = maxDrinks.toString();
    this.modalWinners = true;
  }

  finish() {
    this.userMoreDrinks()
    localStorage.removeItem('pyramid_height')
    localStorage.removeItem('pyramid_mode')
    localStorage.removeItem('pyramid_users')
    this.userList.forEach(user => {
      localStorage.removeItem('pyramid_user_' + user)
      localStorage.removeItem('pyramid_user_gifts_' + user)
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
    // If all users create rule, start again list
    if (this.userWithoutRule.length === 0) {
      this.userWithoutRule = this.userList
    }
    let randomUser: string = this.userWithoutRule[Math.floor(Math.random() * this.userWithoutRule.length)];
    this.userRules = randomUser;
    // Remove user from list
    let newUserWithoutRule: string[] = this.userWithoutRule;
    for (let index = 0; index < newUserWithoutRule.length; index++) {
      if (randomUser === newUserWithoutRule[index]) {
        delete newUserWithoutRule[index]
        break
      }
    }
    // Remove undefined items
    const newUserWithoutRuleClean = []
    for (let index = 0; index < newUserWithoutRule.length; index++) {
      if (newUserWithoutRule[index] !== undefined) {
        newUserWithoutRuleClean.push(newUserWithoutRule[index])
      }
    }
    this.userWithoutRule = newUserWithoutRuleClean
    // Open Modal
    this.modalRules = true;
  }

  // Rule created after 10 cards
  // If last card not show rule
  ruleTime() {
    if (this.mode === "Hard") {
      if ((Number(this.cardInGame) + 1) === this.lastCard) {
        return false;
      }
      if (Number.isInteger((Number(this.cardInGame) + 1) / this.setRule)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // If pyramid height > 4 rules every 10 cards
  // else rule every 5 cards
  setRuleTime() {
    if (Number(this.height) > 4) {
      this.setRule = 10
    } else {
      this.setRule = 5
    }
  }

  setWords() {
    this.modalWords = {
      'drink': ['drink', 'bebe'],
      'drinks': ['drinks', 'beben'],
      'give': ['give', 'regala'],
      'gives': ['gives', 'regalan'],
      'shot': ['shot', 'trago'],
      'shots': ['shots', 'tragos'],
      'All': ['All', 'Todos'],
    };
  }

  returnTranslation(word: string) {
    if (this.language === 'en') {
      return this.modalWords[word][0]
    } else {
      return this.modalWords[word][1]
    }
  }
}
