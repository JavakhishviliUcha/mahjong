import { Component, Input } from '@angular/core'

import { CardModel } from 'src/app/models/card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: CardModel
  @Input() showCards: boolean
}
