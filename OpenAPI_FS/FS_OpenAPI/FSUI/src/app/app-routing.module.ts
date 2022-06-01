import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckComponent } from './chuck/chuck.component';
import { SwapiComponent } from './swapi/swapi.component';
import { ChuckDetailComponent } from './chuck-detail/chuck-detail.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'chuck', component: ChuckComponent },
{ path: 'swapi', component: SwapiComponent },
{ path: 'chuck/:id', component: ChuckDetailComponent },
{ path: 'search', component: SearchComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
