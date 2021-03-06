import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DropComponent } from './drop/drop.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'drop',component:DropComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
