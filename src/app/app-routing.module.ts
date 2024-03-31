import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/commom/about/about.component';
import { HomeComponent } from './components/commom/home/home.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { HeaderComponent } from './components/commom/header/header.component';
import { SidebarComponent } from './components/commom/sidebar/sidebar.component';
import { FooterComponent } from './components/commom/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'tic-tac-toe', component: TicTacToeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
