import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BinnacleLogsComponent } from "./components/binnacleLogs.component";

const rutas:Routes = [
    { path:'',component:BinnacleLogsComponent}
]

@NgModule({
    imports:[RouterModule.forChild(rutas)],
    exports:[RouterModule]
})
export class BinnacleLogsRoutingModule{

}