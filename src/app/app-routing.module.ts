import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdrenalineComponent } from './components/adrenaline/component/adrenaline.component';
import { HomeComponent } from './components/home/component/home.component';
import { ValorantComponent } from './components/valorant/component/valorant.component';

const routes: Routes = [
  { path: '', component: AdrenalineComponent },
  { path: 'home', component: HomeComponent },
  { path: 'valorant', component: ValorantComponent },
  { path: 'valorant', component: AdrenalineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
