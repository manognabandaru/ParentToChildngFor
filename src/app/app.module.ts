import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ChildComponent} from './childcomponent1/child1.component';
import {ChildComponentOdd} from './childcomponent2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildComponentOdd
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
