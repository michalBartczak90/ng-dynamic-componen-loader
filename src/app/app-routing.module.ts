import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing',
  },
  {
    path: 'landing',
    loadChildren: './pages/landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'projects',
    loadChildren: './pages/projects/projects.module#ProjectsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
