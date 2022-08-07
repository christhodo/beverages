import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WildComponent, LoginComponent, ToolbarComponent],
})
export class UiLoginModule {}
