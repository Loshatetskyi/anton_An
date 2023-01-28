import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { BillGatesComponent } from './BillGates/BillGates.component';
import { HobbyComponent } from './hobby/hobby.component';
import { BaseComponent } from './base/base.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { SwitchComponent } from './switch/switch.component';



const routes: Routes = [
  {path: '',component: BaseComponent},
  {path: 'BillGates', component: BillGatesComponent},
  {path: 'Resume', component: ResumeComponent},
  {path: 'Hobby', component: HobbyComponent},
  {path: 'Personal Page', component: PersonalPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    BillGatesComponent,
    HobbyComponent,
    BaseComponent,
    PersonalPageComponent,
    SwitchComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
