import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { AddingDataComponent } from './adding-data/adding-data.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { SignInComponent } from './sign-in/sign-in.component'
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MoreComponent } from './more/more.component';





export const router: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'adding-data', component: AddingDataComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'landing-page', component: LandingPageComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'more', component: MoreComponent},

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);