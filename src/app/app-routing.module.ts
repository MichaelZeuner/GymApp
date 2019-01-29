import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'admin/club', loadChildren: './admin/club/club.module#ClubPageModule' },
  { path: 'admin/coaches', loadChildren: './admin/coaches/coaches.module#CoachesPageModule' },
  { path: 'admin/groups', loadChildren: './admin/groups/groups.module#GroupsPageModule' },
  { path: 'admin/athletes', loadChildren: './admin/athletes/athletes.module#AthletesPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
