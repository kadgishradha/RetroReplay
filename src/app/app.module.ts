import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { SidebarComponent } from './components/commom/sidebar/sidebar.component';
import { HeaderComponent } from './components/commom/header/header.component';
import { HomeComponent } from './components/commom/home/home.component';
import { AboutComponent } from './components/commom/about/about.component';
import { FooterComponent } from './components/commom/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
