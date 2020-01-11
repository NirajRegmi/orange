import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../tabs/home/home.module' ).then( m => m.homePageModule )
          }
        ]
      },
      {
        path: 'addrent',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../tabs/addrent/addrent.module' ).then( m => m.addrentPageModule )
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../tabs/messages/messages.module' ).then( m => m.MessagesPageModule )
          }
        ]
      },
      {
        path: 'you',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../tabs/you/you.module' ).then( m => m.YouPageModule )
          }
        ]
      },
      {
        path: 'myrent',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../tabs/myrent/myrent.module' ).then( m => m.myrentPageModule )
          }
        ]
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/messages',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/messages',
  //   pathMatch: 'full'
  // }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class TabsPageRoutingModule { }
