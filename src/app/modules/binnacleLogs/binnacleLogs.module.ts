import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinnacleLogsComponent } from './components/binnacleLogs.component';
import { BinnacleLogsRoutingModule } from './binnacleLogs-routing.module';
import { BinnacleLogsmModule } from '../../shared/components/binnacleLogs/binnacleLogs.module';

@NgModule({
  imports: [
    CommonModule,
    BinnacleLogsRoutingModule,
    BinnacleLogsmModule
  ],
  declarations: [BinnacleLogsComponent]
})
export class BinnacleLogsModule { }
