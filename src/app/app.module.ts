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
import { AuthManager } from './shared/services/auth.manager';
import { SharedVarsService } from './shared/services/shared-vars.service';

// Pipes
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PulseLogoComponent } from './shared/components/pulse-logo/pulse-logo.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CapitalizePipe,
    SignUpComponent,
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
    SharedVarsService,
    AuthManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
