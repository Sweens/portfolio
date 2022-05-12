import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { IntroComponent } from '../intro/intro.component';

const components = [
  HomePageComponent,
  IntroComponent
];

const modules = [
  CommonModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
})
export class SharedModule {}