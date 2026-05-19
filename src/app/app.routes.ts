import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { Profile } from './HomeComponent/profile/profile';
import { Settings } from './HomeComponent/settings/settings';

export const routes: Routes = [
    {
    path:'home',component:HomeComponent,
    children:[
        {path:'profile',component:Profile},
{path:'settings',component:Settings}
    ]
    },
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent}

];
