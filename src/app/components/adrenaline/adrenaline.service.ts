import { Injectable } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';
import { AdrenalineNoticias } from './model/adrenalineNoticias';

@Injectable({
  providedIn: 'root'
})
export class AdrenalineService {

  constructor(private service: ServiceService) { }

  listarNewsLetterAdrenaline() {
    return this.service.consultaServiceRest().get<AdrenalineNoticias>('/api/soap-adrenaline/consulta-noticias');
  }
}
