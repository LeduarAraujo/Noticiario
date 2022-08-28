import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdrenalineComponent } from './components/adrenaline/component/adrenaline.component';
import { HomeComponent } from './components/home/component/home.component';
import { PelandoComponent } from './components/pelando/component/pelando.component';
import { ValorantComponent } from './components/valorant/component/valorant.component';

const routes: Routes = [
  { path: '', component: PelandoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'valorant', component: ValorantComponent },
  { path: 'adrenaline', component: AdrenalineComponent },
  { path: 'pelando', component: PelandoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
