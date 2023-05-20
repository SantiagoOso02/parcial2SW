import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipoListComponent, EquipoDetailComponent],
  exports: [EquipoListComponent]
})
export class EquipoModule { }
