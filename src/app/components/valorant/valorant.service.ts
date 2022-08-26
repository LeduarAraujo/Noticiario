import { Injectable } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';
import { Noticia } from './model/noticia';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  constructor(private service: ServiceService) { }

  listarNewsLetterValorant() {
    return this.service.consultar('/valorant-api/channels/public/x/status/br.json').subscribe((res: Noticia) => {
      console.log(res);
    });
  }

  listarNewsLetterAdrenaline() {
    return this.service.consultar('https://adrenaline.com.br/rss').subscribe((res: Noticia) => {
      console.log(res);
    });
  }

}
