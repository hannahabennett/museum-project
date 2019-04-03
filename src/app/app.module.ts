import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin-home/home.component';
import { GorgasVisitorComponent } from './gorgas-visitor/gorgas-visitor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AlertService, AuthenticationService, UserService } from './_services';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { AuthGuard } from './_guards';

import { AppRoutingModule } from './app.routing';
import { MoundvilleVisitorComponent } from './moundville-visitor/moundville-visitor..component';
import { TransportationVisitorComponent } from './transportation-visitor/transportation-visitor.component';
import { PaulJonesVisitorComponent } from './pauljones-visitor/pauljones-visitor.component';
import { MuseumService } from './_services/museum.service';
import { VisitorDataComponent } from './visitor-data/visitor-data.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    GorgasVisitorComponent,
    LoginComponent,
    RegisterComponent,
    MoundvilleVisitorComponent,
    TransportationVisitorComponent,
    PaulJonesVisitorComponent,
    VisitorDataComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    MuseumService,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
