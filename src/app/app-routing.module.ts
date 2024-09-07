import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { OneWayBindingComponent } from './calculadora/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './calculadora/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: 'pages/search', component: SearchComponent },
  
  { path: 'calculadora/one-way-binding', component: OneWayBindingComponent },
  { path: 'calculadora/two-way-binding', component: TwoWayBindingComponent },
  { path: '', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
