import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { GameComponent } from './components/game/game.component';


const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'game', component: GameComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
