import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { Grupo } from '../grupo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  equiposGrupoA: Array<Equipo> = [];
  equiposGrupoB: Array<Equipo> = [];
  equiposGrupoC: Array<Equipo> = [];
  equiposGrupoD: Array<Equipo> = [];
  equiposGrupoE: Array<Equipo> = [];
  equiposGrupoF: Array<Equipo> = [];
  equiposGrupoG: Array<Equipo> = [];
  equiposGrupoH: Array<Equipo> = [];
  selectedEquipo!: Equipo;
  selected: Boolean = false;



  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
      this.getEquiposPorGrupo();
    });
  }

  getEquiposPorGrupo(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equiposGrupoA = equipos.filter(equipo => equipo.group_letter === 'A');
      this.equiposGrupoB = equipos.filter(equipo => equipo.group_letter === 'B');
      this.equiposGrupoC = equipos.filter(equipo => equipo.group_letter === 'C');
      this.equiposGrupoD = equipos.filter(equipo => equipo.group_letter === 'D');
      this.equiposGrupoE = equipos.filter(equipo => equipo.group_letter === 'E');
      this.equiposGrupoF = equipos.filter(equipo => equipo.group_letter === 'F');
      this.equiposGrupoG = equipos.filter(equipo => equipo.group_letter === 'G');
      this.equiposGrupoH = equipos.filter(equipo => equipo.group_letter === 'H');
    });
  }

  onSelected(equipo: Equipo): void {
    this.selected = true;
    this.selectedEquipo = equipo;
  }

  ngOnInit() {
    this.getEquipos();
  }
}

