import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElenaComponent } from './components/elena/elena.component';
import { FlorianComponent } from './components/florian/florian.component';
import { NadjaComponent } from './components/nadja/nadja.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'elena', component: ElenaComponent },
  { path: 'florian', component: FlorianComponent },
  { path: 'nadja', component: NadjaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
