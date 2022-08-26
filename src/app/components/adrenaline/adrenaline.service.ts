import { Injectable } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';

@Injectable({
  providedIn: 'root'
})
export class AdrenalineService {

  constructor(private service: ServiceService) { }

  listarNewsLetterAdrenaline() {
    return this.service.consultaServiceRest().get('/adrenaline-api/rss');
  }
}
