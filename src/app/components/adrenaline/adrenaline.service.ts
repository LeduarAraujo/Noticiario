import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ServiceService } from 'src/app/core/services/service.service';
import { AdrenalineNoticias } from './model/adrenalineNoticias';

@Injectable({
  providedIn: 'root'
})
export class AdrenalineService {

  constructor(private service: ServiceService) { }

  listarNewsLetterAdrenaline() {
    //return this.service.consultar('/adrenaline-api/rss');

    return this.service.consultaGET().get('/adrenaline-api/rss', {headers: { 'Accept': 'application/rss+xml'}});
  }
}
