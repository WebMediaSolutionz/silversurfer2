import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'hammerjs';

// Routing
import { routing } from './app.routing';

// Services
import { WebService } from './shared/services/web.service';
import { AuthService } from './shared/services/auth.service';
import { SharedVarsService } from './shared/services/shared-vars.service';

// Pipes
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

// Components
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PulseLogoComponent } from './shared/components/pulse-logo/pulse-logo.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    CapitalizePipe,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    DashboardComponent,
    PulseLogoComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    WebService,
    AuthService,
    SharedVarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
