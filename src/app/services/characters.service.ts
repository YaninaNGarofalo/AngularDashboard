import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) { }

  getPersonajes(page:number):Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character?page='+ page);
  }
  getPersonaje(id:number):Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character/'+id);
  } 
}
