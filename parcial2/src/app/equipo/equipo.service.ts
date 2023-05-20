import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Equipo } from './equipo';
import { Grupo } from './grupo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.teamsUrl;

  constructor(private http: HttpClient) { }
  
  getEquipos(): Observable<Equipo[]> {
    return this.http.get<{ groups: { letter: string, teams: Equipo[] }[] }>(this.apiUrl).pipe(
      map(response => {
        return response.groups.flatMap(group => {
          return group.teams.map(equipo => {
            equipo.group_letter = group.letter;
            return equipo;
          });
        });
      })
    );
  }

}
