import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultFindBinnacleAudit, FindBinnacleAudit, FindBinnacleLog, ResultFindBinnacleLog } from '../models/binnacle.model';
import { Observable } from 'rxjs';
import {URL_BASE_API_BINNACLE_AUDIT_BYREGISTRY_W} from '../../../constants';
import {URL_BASE_API_BINNACLE_AUDIT_BYDATABASE_W} from '../../../constants';
import {URL_BASE_API_BINNACLE_AUDIT_BYTABLE_W} from '../../../constants';

import {URL_BASE_API_BINNACLE_LOGS_BYID_W} from '../../../constants';
import {URL_BASE_API_BINNACLE_LOGS_BYDATERANGE_W} from '../../../constants';
import {URL_BASE_API_BINNACLE_LOGS_BYTYPE_W} from '../../../constants';
import {URL_BASE_API_BINNACLE_LOGS_BYUSER_W} from '../../../constants';


import {paramAudit, paramLogs} from '../../../param-constants';
import { url } from 'inspector';


@Injectable()
export class BinnacleServiceService {
    
    constructor(private http: HttpClient) { }

    public getByRegistry(binnacle:FindBinnacleAudit):Observable<ResultFindBinnacleAudit[]>{
        return this.http.get<ResultFindBinnacleAudit[]>(URL_BASE_API_BINNACLE_AUDIT_BYREGISTRY_W.concat(paramAudit.paramRegistryId).concat(binnacle.registryId)
        .concat(paramAudit.paramcodigo).concat(paramAudit.paramTable).concat(binnacle.nameTable).concat(paramAudit.paramcodigo).concat(paramAudit.paramDatabase)
        .concat(binnacle.nameDatabase).concat(paramAudit.paramcodigo).concat(paramAudit.paramApplication).concat(binnacle.nameApplication));
    
    }

    public getDataBase(binnacle:FindBinnacleAudit):Observable<ResultFindBinnacleAudit[]>{
        return this.http.get<ResultFindBinnacleAudit[]>(URL_BASE_API_BINNACLE_AUDIT_BYDATABASE_W.concat(paramAudit.paramDatabase).concat(binnacle.nameDatabase));        
    }

    public getByTable(binnacle:FindBinnacleAudit):Observable<ResultFindBinnacleAudit[]>{
        return this.http.get<ResultFindBinnacleAudit[]>(URL_BASE_API_BINNACLE_AUDIT_BYTABLE_W.concat(paramAudit.paramTable).concat(binnacle.nameTable));
    }    

    public getById(binnacle:FindBinnacleLog):Observable<ResultFindBinnacleLog[]>{
        return this.http.get<ResultFindBinnacleLog[]>(URL_BASE_API_BINNACLE_LOGS_BYID_W.concat(paramLogs.paramIdLog)+binnacle.idLog);
    }    
    
    public getByDateRange(binnacle:FindBinnacleLog):Observable<ResultFindBinnacleLog[]>{
        return this.http.get<ResultFindBinnacleLog[]>(URL_BASE_API_BINNACLE_LOGS_BYDATERANGE_W.concat(paramLogs.paramStartDate).concat(binnacle.startDate)
        .concat(paramLogs.paramCodigo).concat(paramLogs.paramEndDate).concat(binnacle.endDate));
    }   
    
    public getByType(binnacle:FindBinnacleLog):Observable<ResultFindBinnacleLog[]>{
        return this.http.get<ResultFindBinnacleLog[]>(URL_BASE_API_BINNACLE_LOGS_BYTYPE_W.concat(paramLogs.paramType).concat(binnacle.type));
    }    

    public getByUser(binnacle:FindBinnacleLog):Observable<ResultFindBinnacleLog[]>{
        return this.http.get<ResultFindBinnacleLog[]>(URL_BASE_API_BINNACLE_LOGS_BYUSER_W.concat(paramLogs.paramUser).concat(binnacle.user));
    }    
}
