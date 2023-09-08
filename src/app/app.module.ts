import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyTagComponent } from './components/empty-tag/empty-tag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyTagComponent,
    NavbarComponent,
    ParallaxDirective,
    WorkComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
