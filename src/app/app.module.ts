import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';




import { AppComponent } from './app.component';
import { COUNTER_STATE_NAME } from './store/counter.selector';
import { reducer } from './store/counter.reducer';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature(COUNTER_STATE_NAME,reducer),
    StoreModule.forRoot({}),
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
