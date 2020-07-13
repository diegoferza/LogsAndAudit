import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { BinnacleAuditComponent } from './components/binnacleAudit.component';



const routes: Routes = [
  {
    path: '',
    component: BinnacleAuditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BinnacleAuditRoutingModule { }