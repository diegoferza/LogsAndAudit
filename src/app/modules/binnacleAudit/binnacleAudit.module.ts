import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinnacleAuditComponent } from './components/binnacleAudit.component';
import { BinnacleAuditmModule } from '../../shared/components/binnacleAudit/binnacleAudit.module';
import { BinnacleAuditRoutingModule } from './binnacleAudit-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BinnacleAuditmModule,
    BinnacleAuditRoutingModule
  ],
  declarations: [
    BinnacleAuditComponent
  ],
  exports:[
    BinnacleAuditComponent
  ],
  entryComponents:[
    BinnacleAuditComponent
  ]
})
export class BinnacleAuditModule { }
