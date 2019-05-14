import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Comp1Component} from './comp1/comp1.component';
import {Comp2Component} from './comp2/comp2.component';

const routes: Routes = [
  {
    path:'reg',
    component:Comp1Component,
  }, 
  {
    path:'search',
    component:Comp2Component,
  }     

  ];
export const routingcomp=[Comp1Component,Comp2Component]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
