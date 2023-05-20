import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {
  partidos: Partido[] = [];
  topScoringCountries: { name: string, goals: number }[] = [];

  constructor(private partidoService: PartidoService) {}

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      this.calculateTopScoringCountries();
    });
  }

  calculateTopScoringCountries(): void {
    const goalsByCountry = new Map<string, number>();

    for (const partido of this.partidos) {
      if (partido.status!=='future_scheduled' && partido.status!== 'future_unscheduled'){
        const country = partido.home_team.name;
        const goals = partido.home_team.goals;

        if (goalsByCountry.has(country)) {
          goalsByCountry.set(country, goalsByCountry.get(country)! + goals);
        } else {
          goalsByCountry.set(country, goals);
        }
      }
    }


    this.topScoringCountries = Array.from(goalsByCountry.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, goals]) => ({ name, goals }));
  }

  ngOnInit() {
    this.getPartidos();
  }
}
