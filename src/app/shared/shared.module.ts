import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatIconModule } from '@angular/material/icon';
//import { MatButtonModule } from '@angular/material/button';
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatListModule } from '@angular/material/list';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatCardModule } from '@angular/material/card';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
//import { MatSnackBarModule } from '@angular/material/snack-bar';

const components = [
  ShellComponent,
  LoadingComponent,
  NavBarComponent
];

const modules = [
  CommonModule,
  RouterModule,
  LayoutModule,
  //MatToolbarModule,
  //MatIconModule
  //MatButtonModule,
  //MatSidenavModule,
  //MatListModule,
  //MatMenuModule,
  //MatIconModule,
  //MatCardModule,
  //MatFormFieldModule,
  //MatInputModule,
  //MatSnackBarModule
];

@NgModule({
  declarations: [
    ...components,
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