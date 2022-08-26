import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/component/home.component';
import { ValorantComponent } from './components/valorant/component/valorant.component';

const routes: Routes = [
  { path: '', component: ValorantComponent },
  { path: 'home', component: HomeComponent },
  { path: 'valorant', component: ValorantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
