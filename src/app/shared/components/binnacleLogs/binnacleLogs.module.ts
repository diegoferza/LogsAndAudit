import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BinnacleLogsComponent } from './binnacleLogs.component';
import { FormsModule } from '@angular/forms'


// PrimeNg
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

//Extras
import { NgxPaginationModule } from 'ngx-pagination';
import { BinnacleServiceService } from '../../services/binnacleService.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MDBBootstrapModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    NavbarModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    SweetAlert2Module,
    FormsModule,
    CommonModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PanelModule,
    DropdownModule,
    NgxPaginationModule
  ],
  exports:[
    BinnacleLogsComponent
  ],
  declarations: [
    BinnacleLogsComponent    
  ],
  providers:[
    BinnacleServiceService
  ]
})
export class BinnacleLogsmModule { }
