import { ContactComponent } from './contact-us/contact.component';
import { AboutUsComponent } from './about-us/aboutUs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 


 const routes: Routes = [
     {path:'home',component:HomeComponent},
     {path:'gallery',component:GalleryComponent},
      {path:'about-us',component:AboutUsComponent},
     {path:'contact-us',component:ContactComponent}
 ]; 
  @NgModule({ 
      imports: [RouterModule.forRoot(routes)], 
      exports: [RouterModule] 
    }) 
  
  export class AppRoutingModule { }