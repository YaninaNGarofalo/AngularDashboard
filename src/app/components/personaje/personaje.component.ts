import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import {Result} from '../../interfaces/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  personajeObject : Result = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: { name: '', url: '', },
    location: { name: '', url: '', },
    image: '',
    episode: [],
    url: '',
    created: ''  
  }

  constructor(private pjService : CharactersService, private route:ActivatedRoute) {
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '0' )
    pjService.getPersonaje(id).subscribe({
      next: data => this.personajeObject = data ,
      error: err=> console.error(err)       
    });
  }
  ngOnInit(): void {
  }

}
