import { Component, Injectable } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';


@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
  constructor(private _pruebaService: PruebaService){}

  getDatos(){
  this._pruebaService.getData().subscribe(data => {
    console.log(data);
  })
  }
  
}

