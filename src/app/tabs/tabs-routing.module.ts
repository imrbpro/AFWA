import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'myorders',
        loadChildren: () => import('../myorders/myorders.module').then( m => m.MyordersPageModule)
      },
      {
        path: 'restaurants',
        loadChildren: () => import('../restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
      },
      {
        path: 'myprofile',
        loadChildren: () => import('../myprofile/myprofile.module').then( m => m.MyprofilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/restaurants',
        pathMatch: 'full'
      }
    ]
    },
    {
      path: '',
      redirectTo: '/tabs/restaurants',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
