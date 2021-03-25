import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
/**
 * Rutas de la aplicacion
 */
const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'/home'
  }
  ,
{
  path:'home',
  component: HomePageComponent
},
{
  path:'login',
  component: LoginPageComponent
}
,
{
  path:'register',
  component: RegisterPageComponent
}, {
  path:'**',
  component: NotFoundPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
