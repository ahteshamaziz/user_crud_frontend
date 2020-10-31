import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserComponent } from './user/user.component';
import { UploadComponent } from './upload/upload.component';

import { EditComponent } from './edit/edit.component';




const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path:'welcome',component: WelcomeComponent,children:  [
    {path: 'home', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'edit/:id', component: EditComponent},



  ]},
   {path:'**',component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }













