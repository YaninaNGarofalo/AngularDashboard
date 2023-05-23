import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';
import { Root } from '../../interfaces/episode';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
  
  currentPage:number = 1
  errorMessage:string = ''
  episodiosObject:Root = {
    info: { count: 0,
      pages: 0,
      next: '',
      prev: ''
    } ,
    results: []
  }
  constructor(private episodeService:EpisodesService) {
    episodeService.getEpisodios(this.currentPage).subscribe({
      next:data => this.episodiosObject = data,
      error:err => {
          this.errorMessage = err.message;
          console.error('Error: ', err);
      }
    });
  }
  cambiarPag(goTo:string){
    if (goTo=='anterior'){
      if(this.episodiosObject.info.prev !== null){
        this.currentPage -= 1
      }      
    }else if(goTo=='siguiente'){
      if(this.episodiosObject.info.next !== null){
        this.currentPage += 1
      }      
    }
    this.episodeService.getEpisodios(this.currentPage).subscribe({
      next:data =>  this.episodiosObject = data
    });
  }

  ngOnInit(): void {
  }

}
