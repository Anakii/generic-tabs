import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './components/tab/tab.component';
import {HttpClientModule} from '@angular/common/http'

import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
