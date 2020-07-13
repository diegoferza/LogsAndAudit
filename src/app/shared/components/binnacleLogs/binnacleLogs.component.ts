import { Component, OnInit } from '@angular/core';
import { BinnacleServiceService } from '../../services/binnacleService.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ResultFindBinnacleLog, FindBinnacleLog } from '../../models/binnacle.model';

@Component({
  selector: 'binnacleLogs',
  templateUrl: './binnacleLogs.component.html',
  styleUrls: ['./binnacleLogs.component.scss'],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class BinnacleLogsComponent implements OnInit {

  habilitarLogId = false;
  hablitarUserLogs = false;
  hablitarStartDate = false;
  habilitarEndDate = false;
  habilitarTypeInput = false;

  pageActual: number = 1;
  public filterBinnacle = '';
  public resultFindBinnacleLog: ResultFindBinnacleLog[] = [];
  public findBinnacleLog: FindBinnacleLog={
    idLog:null,
    startDate:'',
    endDate:'',
    user:'',
    type:''
  };

  public findBinnacleLogType: Array<any> = [
    { id: 1, name: 'Error'},
    { id: 2, name: 'Info'}, 
    { id: 2, name: 'Fatal'} 
  ];

  constructor(private binnacleServiceService: BinnacleServiceService,
    private messageService: MessageService,
    private confirmation: ConfirmationService) { }

  ngOnInit() {
  } 

  onItemChange(event){
    this.filterBinnacle = event.target.value;
    if(this.filterBinnacle == 'idLogs'){
      this.toDisableLogId();      
    }

    if(this.filterBinnacle == 'userFilter'){
      this.toDisableUser();    
    }

    if(this.filterBinnacle == 'dateRange'){
      this.toDisableDateRange();     
    }   
    
    if(this.filterBinnacle == 'typeFilter'){
      this.toDisableType();     
    }  
  }

  toDisableLogId(){
    this.habilitarLogId = true;
    this.hablitarUserLogs = false;
    this.hablitarStartDate = false;
    this.habilitarEndDate = false;
    this.habilitarTypeInput = false;
  }
  
  toDisableUser(){
    this.habilitarLogId = false;
    this.hablitarUserLogs = true;
    this.hablitarStartDate = false;
    this.habilitarEndDate = false;
    this.habilitarTypeInput = false;
  }

  toDisableDateRange(){
    this.habilitarLogId = false;
    this.hablitarUserLogs = false;
    this.hablitarStartDate = true;
    this.habilitarEndDate = true;
    this.habilitarTypeInput = false;
  }

  toDisableType(){
    this.habilitarLogId = false;
    this.hablitarUserLogs = false;
    this.hablitarStartDate = false;
    this.habilitarEndDate = false;
    this.habilitarTypeInput = true;
  }

  toDisable(){
    if(this.filterBinnacle == 'idLogs'){
      this.toDisableLogId();      
    }

    if(this.filterBinnacle == 'userFilter'){
      this.toDisableUser();    
    }

    if(this.filterBinnacle == 'dateRange'){
      this.toDisableDateRange();     
    }   
    
    if(this.filterBinnacle == 'typeFilter'){
      this.toDisableType();     
    }       
  }  
  
  findLogs() {      
    switch (this.filterBinnacle) {
      case 'idLogs':
          this.getIdLogs();
          break;
      case 'userFilter':
          this.getUser();
          break;
      case 'dateRange':
          this.getDateRange();
          break;
      case 'typeFilter':
          this.getType();
          break;
      }      
  }

  getIdLogs() {
    this.binnacleServiceService.getById(this.findBinnacleLog)
    .subscribe(result => { this.resultFindBinnacleLog = result; console.log(this.resultFindBinnacleLog) });    
}

  getUser() {
    this.binnacleServiceService.getByUser(this.findBinnacleLog)
    .subscribe(result => { this.resultFindBinnacleLog = result; console.log(this.resultFindBinnacleLog) });
}

getDateRange() {
  this.binnacleServiceService.getByDateRange(this.findBinnacleLog)
    .subscribe(result => { this.resultFindBinnacleLog = result; console.log(this.resultFindBinnacleLog) });
}

getType() {
 this.binnacleServiceService.getByType(this.findBinnacleLog)
    .subscribe(result => { this.resultFindBinnacleLog = result; console.log(this.resultFindBinnacleLog) });
}

  reset() {
    this.findBinnacleLog = { idLog:null, startDate:'', endDate:'',user:'',type:''}; 
    this.resultFindBinnacleLog = [];  
    this.toDisable();      
  } 

}
