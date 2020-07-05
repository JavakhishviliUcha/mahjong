import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { CardsComponent } from './containers/cards/cards.component'
import { CardComponent } from './components/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
