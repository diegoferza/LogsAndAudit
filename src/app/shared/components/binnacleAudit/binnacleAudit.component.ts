import { Component, OnInit } from '@angular/core';
import { BinnacleServiceService } from '../../services/binnacleService.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ResultFindBinnacleAudit, FindBinnacleAudit } from '../../models/binnacle.model';


@Component({
  selector: 'binnacleAudit',
  templateUrl: './binnacleAudit.component.html',
  styleUrls: ['./binnacleAudit.component.css'],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class BinnacleAuditComponent implements OnInit {
 
  habilitarRegistryId = false;
  hablitarNameTable = false;
  hablitarNameDatabase = false;
  habilitarNameApplication = false;
  checkedDatabase= true;
  checkedSpecific = true;
  checkedTable = true;

  pageActual: number = 1;
  public filterBinnacle = '';
  public resultFindBinnacle: ResultFindBinnacleAudit[] = [];
  public findBinnacle: FindBinnacleAudit={
    registryId:'',
    nameTable:'',
    nameDatabase:'',
    nameApplication:''
  }; 
  
  constructor(private binnacleServiceService: BinnacleServiceService,
    private messageService: MessageService,
    private confirmation: ConfirmationService) {
  }

  ngOnInit(): void {
    
  }

  onItemChange(event){
    this.filterBinnacle = event.target.value;
    if(this.filterBinnacle == 'specific'){
      this.enableSpecific();     
    }

    if(this.filterBinnacle == 'database'){
      this.todisableDatabase();      
    }

    if(this.filterBinnacle == 'table'){
      this.toDisableTable();     
    }    
  }

  toDisableTable(){
    this.habilitarRegistryId = false;
    this.hablitarNameTable = true;
    this.hablitarNameDatabase = false;
    this.habilitarNameApplication = false;
  }
  
  todisableDatabase(){
    this.habilitarRegistryId = false;
    this.hablitarNameTable = false;
    this.hablitarNameDatabase = true;
    this.habilitarNameApplication = false;
  }

  enableSpecific(){
    this.habilitarRegistryId = true;
    this.hablitarNameTable = true;
    this.hablitarNameDatabase = true;
    this.habilitarNameApplication = true;
  }

  toDisable(){
    this.habilitarRegistryId = false;
    this.hablitarNameTable = false;
    this.hablitarNameDatabase = false;
    this.habilitarNameApplication = false;   
    this.checkedDatabase= false;
    this.checkedSpecific = false;
    this.checkedTable = false;
  }  
  
  findAudit() {      
    switch (this.filterBinnacle) {
      case 'specific':
          this.getRegistry()
          break;
      case 'database':
          this.getDatabase();
          break;
      case 'table':
          this.getTable()
          break;
      }      
  }

  getRegistry() {
    this.binnacleServiceService.getByRegistry(this.findBinnacle)
    .subscribe(result => { this.resultFindBinnacle = result; console.log(this.resultFindBinnacle) });   
}

  getTable() {
   this.binnacleServiceService.getByTable(this.findBinnacle)
    .subscribe(result => { this.resultFindBinnacle = result; console.log(this.resultFindBinnacle) });
}

getDatabase() { 
  this.binnacleServiceService.getDataBase(this.findBinnacle)
  .subscribe(result => { this.resultFindBinnacle = result; console.log(this.resultFindBinnacle) });
 }

  reset() {
    this.findBinnacle = { registryId: '', nameTable: '', nameDatabase: '',nameApplication: '' }; 
    this.resultFindBinnacle = [];  
    this.enableSpecific();
    this.toDisable();        
  }
}
