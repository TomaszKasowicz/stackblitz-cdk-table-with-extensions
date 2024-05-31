import { Routes } from "@angular/router";
import { TabsComponent } from "./tabs.component";

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tabs'
    },
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'cdk'
            },
            {
                path: 'cdk',
                title:  'CDK',
                loadComponent: () => import('./cdk-table.component').then(m => m.CdkTableComponent)
            }
        ]
    },
]