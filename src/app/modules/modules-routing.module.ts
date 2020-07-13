import { UtilsGuard } from '../shared/utils/utils.guard';


const homeModule = () => import('./home/home.module').then(mod => mod.HomeModule);
const audit = () => import("./binnacleAudit/binnacleAudit.module").then(mod => mod.BinnacleAuditModule);
const logs = () => import("./binnacleLogs/binnacleLogs.module").then(mod => mod.BinnacleLogsModule);

export const MODULES_ROUTE = [

    { path: '', canActivate: [UtilsGuard], loadChildren: homeModule },
    { path: 'audit', canActivate: [UtilsGuard], loadChildren: audit },
    { path: 'logs', canActivate: [UtilsGuard], loadChildren: logs },
];