import { Routes } from '@angular/router';
import { StarterPageComponent } from './pages/starter-page/starter-page.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { SelectedClientsComponent } from './pages/selected-clients/selected-clients.component';
import { ClientsLayoutComponent } from './layouts/clients-layout/clients-layout.component';

export const routes: Routes = [
    {path:'', component: StarterPageComponent },
    {
        path:'clients', 
        component:ClientsLayoutComponent,
        children:[
            {path:'', component:ClientsComponent},
            {path:'select', component:SelectedClientsComponent}
        ]

    },
];
