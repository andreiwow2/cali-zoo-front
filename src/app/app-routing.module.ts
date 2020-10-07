import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './helpers';
import {
  AdminloginPageComponent,
  DashboardComponent,
} from './pages';

const routes: Routes = [
  { path: 'login', component: AdminloginPageComponent },
  { path: '', component: DashboardComponent, canActivate: [ CanActivateGuard ] },
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
