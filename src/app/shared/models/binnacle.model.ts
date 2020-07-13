export class FindBinnacleAudit{
    registryId:string;
    nameTable:string;
    nameDatabase:string;
    nameApplication:string;
}

export class FindBinnacleLog{
    idLog:number;
    startDate:string;
    endDate:string;
    user:string;
    type:string;
}

export interface ResultFindBinnacleAudit{
    id:number;
    registryId:string;
    nameTable:string;
    nameDatabase:string;
    nameApplication:string;
    actualVersion:number;
    registry:string;
}

export interface ResultFindBinnacleLog{
    nameApplication:string;
    method:string;
    userId:string;
    CodeError:string;
    messageError:string;
    date:Date;
    type:string;
}

  



 

