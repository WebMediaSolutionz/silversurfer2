// Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AuthManager } from './shared/services/auth.manager';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PulseComponentLibComponent } from './components/pulse-component-lib/pulse-component-lib.component';

const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthManager]
    },
    {
        path: 'pulse-component-lib',
        component: PulseComponentLibComponent,
        canActivate: [AuthManager]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthManager]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
