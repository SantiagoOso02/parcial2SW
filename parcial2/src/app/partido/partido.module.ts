import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidoListComponent } from './partido-list/partido-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PartidoListComponent],
  exports: [PartidoListComponent]
})
export class PartidoModule { }
