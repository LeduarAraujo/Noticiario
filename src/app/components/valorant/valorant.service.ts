import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ServiceService } from 'src/app/core/services/service.service';
import { Noticia } from './model/noticia';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  constructor(private service: ServiceService) { }

  //listarNewsLetterValorant(): Noticia {


    //return this.service.consultar('/valorant-api/channels/public/x/status/br.json').pipe(map((res: Noticia) => res));


    /*return this.service.consultar('/valorant-api/channels/public/x/status/br.json').subscribe((res: Noticia) => {
      console.log(res);
    });*/
  //}

}
