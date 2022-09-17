import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './components/counter/counter.component';
import { AdderComponent } from './components/adder/adder.component';
import { HeaderComponent } from './components/header/header.component';
import { AnaHeaderComponent } from './components/tarefa/ana-header/ana-header.component';
import { AnaTimerComponent } from './components/tarefa/ana-timer/ana-timer.component';
import { AnaSimpleInterestsComponent } from './components/tarefa/ana-simple-interests/ana-simple-interests.component';
import { AnaCompoundInterestsComponent } from './components/tarefa/ana-compound-interests/ana-compound-interests.component';
import { AnaRandomNumbersComponent } from './components/tarefa/ana-random-numbers/ana-random-numbers.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    AdderComponent,
    HeaderComponent,
    AnaHeaderComponent,
    AnaTimerComponent,
    AnaSimpleInterestsComponent,
    AnaCompoundInterestsComponent,
    AnaRandomNumbersComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
