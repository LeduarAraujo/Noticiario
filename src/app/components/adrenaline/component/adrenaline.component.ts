import { Component, OnInit } from '@angular/core';
import { AdrenalineService } from '../adrenaline.service';
import { ListaAdrenalineNoticia } from '../model/listaAdrenalineNoticia';

@Component({
  selector: 'app-adrenaline',
  templateUrl: './adrenaline.component.html',
  styleUrls: ['./adrenaline.component.scss']
})
export class AdrenalineComponent implements OnInit {

  noticias: ListaAdrenalineNoticia[] = [];

  constructor(private service: AdrenalineService) { }

  ngOnInit(): void {
    this.service.listarNewsLetterAdrenaline().subscribe(res => this.noticias = res.listaAdrenalineNoticia);
  }
}
