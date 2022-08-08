/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from 'libs/ui-login/src/lib/login/login.component';
import { WildComponent } from 'libs/ui-login/src/lib/wild/wild.component';
import { BeveragesComponent } from './beverages/beverages.component';

const routes: Route[] = [
  { path: 'beverages', component: BeveragesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
