import { Component, OnInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'

import { CardModel } from 'src/app/models/card.model'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [       // metadata array
    trigger('gameIsFinished', [     // trigger block
      state('true', style({      // final CSS following animation        
        opacity: 1,
        zIndex: 1
      })),
      transition('true => false', animate('2000ms linear'))
    ])
  ]
})
export class CardsComponent implements OnInit {
  gameIsFinished: string = 'false'
  min = 1
  max = 50
  leftCardsCount = 100;
  cards = []
  activeCard: CardModel
  showAllCards = true
  disabled = true

  ngOnInit(): void {
    this.generateNumbers(this.min, this.max)
    this.hideCards()
  }

  // generating random prime numbers between 1 and 50
  generateNumbers(min, max) {
    for (let i = min; i <= max; i++) {
      this.cards.push(this.createCard(i))
      this.cards.push(this.createCard(i))
    }
    this.shuffleCards(this.cards)
  }

  shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = cards[i]
      cards[i] = cards[j]
      cards[j] = temp
    }
  }

  createCard(value) {
    const card: CardModel = {
      paired: false,
      show: false,
      value
    }
    return card
  }

  chooseCard(card: CardModel) {
    if (card.paired || card === this.activeCard || this.disabled) return

    if (!this.activeCard) {
      card.show = true
      this.activeCard = card
    } else if (card.value === this.activeCard.value) {
      card.paired = true
      this.activeCard.paired = true
      this.activeCard = null
      this.calculateLeftCardsCount()
    } else {
      this.disabled = true
      card.show = true
      setTimeout(() => {
        this.activeCard.show = false
        this.activeCard = null
        card.show = false
        this.disabled = false
      }, 1000)
    }
  }

  calculateLeftCardsCount() {
    this.leftCardsCount = this.cards.filter(card => !card.paired).length
    if (this.leftCardsCount === 0) {
      this.gameIsFinished = 'true'
    }
  }

  hideCards() {
    setTimeout(() => {
      this.showAllCards = false
      this.disabled = false
    }, 3000)
  }
}
