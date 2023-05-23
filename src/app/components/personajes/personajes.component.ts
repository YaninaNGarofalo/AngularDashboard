import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Root } from '../../interfaces/character';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  currentPage:number = 1
  errorMessage:string = ''
  personajesObject : Root = {
    info: { count: 0,
      pages: 0,
      next: '',
      prev: ''
    } ,
    results: []
  }

  constructor(private pjService : CharactersService) { 
    pjService.getPersonajes(this.currentPage).subscribe({
      next:data => this.personajesObject = data,
      error: (err)=>{
        this.errorMessage = err.message
        console.error('Error: ', err)
      }
    });
  }

  ngOnInit(): void {
  }
  cambiarPag(goTo:string){
    if (goTo=='anterior'){
      if(this.personajesObject.info.prev !== null){
        this.currentPage -= 1
      }      
    }else if(goTo=='siguiente'){
      if(this.personajesObject.info.next !== null){
        this.currentPage += 1
      }      
    }
    this.pjService.getPersonajes(this.currentPage).subscribe({
      next:data => this.personajesObject = data,
      error: err => console.error('Error: ', err)
    });
  }
}
