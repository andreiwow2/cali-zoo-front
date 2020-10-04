import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginPageComponent } from './pages/auth/adminlogin-page/adminlogin-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  { path: 'login', component: AdminloginPageComponent },
  { path: '', component: DashboardComponent, canActivate: [CanActivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
