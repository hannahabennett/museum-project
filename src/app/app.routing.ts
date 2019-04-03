import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GorgasVisitorComponent } from './gorgas-visitor/gorgas-visitor.component';
import { AuthGuard } from './_guards';
import { MoundvilleVisitorComponent } from './moundville-visitor/moundville-visitor..component';
import { TransportationVisitorComponent } from './transportation-visitor/transportation-visitor.component';
import { PaulJonesVisitorComponent } from './pauljones-visitor/pauljones-visitor.component';
import { VisitorDataComponent } from './visitor-data/visitor-data.component';




const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'home', component: AdminHomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'gorgas-visitor', component: GorgasVisitorComponent},
    {path: 'moundville-visitor', component: MoundvilleVisitorComponent},
    {path: 'transportation-visitor', component: TransportationVisitorComponent},
    {path: 'pauljones-visitor', component: PaulJonesVisitorComponent},
    { path: 'visitor-data',  component: VisitorDataComponent},
    
];

      

@NgModule({
    exports: [
      RouterModule
    ],
    imports: [
      RouterModule.forRoot(routes),
        // RouterModule.forRoot(routes,
        //     { enableTracing: true } )
  ]
})
  export class AppRoutingModule { }

