import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Edge } from '../model/edge';
import { PelandoResponse } from '../model/pelandoResponse';
import { PelandoService } from '../pelando.service';

@Component({
  selector: 'app-pelando',
  templateUrl: './pelando.component.html',
  styleUrls: ['./pelando.component.scss']
})
export class PelandoComponent implements OnInit {

  promocoes70: Edge[] = [];
  promocoes80: Edge[] = [];

  constructor(private service: PelandoService) { }

  ngOnInit(): void {
  }

  botao() {
    this.service.realizarBusca('Placa de Vídeo RTX 3070').subscribe(res => {
        this.promocoes70 = res.data.public.searchOffers
          .edges.filter(off => off.status == "ACTIVE").slice(0, 2);
    });

    this.service.realizarBusca('Placa de Vídeo RTX 3080').subscribe(res => {
        this.promocoes80 = res.data.public.searchOffers
          .edges.filter(off => off.status == "ACTIVE").slice(0, 2);
    });
  }

  montarImg(apiString: string) {
    return "/pelando-img/" + apiString.substring(27);
  }

  concatenarLista() {
    return this.promocoes70.concat(this.promocoes80);
  }

}
