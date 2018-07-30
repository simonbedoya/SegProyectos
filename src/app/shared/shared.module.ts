import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatModule } from './mat.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [RouterModule, MatModule, FlexLayoutModule, FormsModule],
  declarations: []
})
export class SharedModule { }
