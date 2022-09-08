import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';
import { PelandoResponse } from './model/pelandoResponse';

@Injectable({
  providedIn: 'root'
})
export class PelandoService {

  constructor(private service: ServiceService) { }


  realizarBusca(texto: string){
    let parametros = new HttpParams();
    parametros = parametros.append("operationName", "SearchOffersQuery");
    parametros = parametros.append("extensions", '{"persistedQuery":{"version":1,"sha256Hash":"8f28ad48873aa383599f5649a90433ce9987d02612a9971ee903135046f6afd8"}}');
    parametros = parametros.append("variables", '{"query":"' + texto + '","sortBy":"CREATED_AT"}');
    
    return this.service.consultaServiceRest().get<PelandoResponse>('/pelando-api/api/graphql', {params: parametros});
  }

  /*async realizarBusca(texto: string) {
    let parametros = new HttpParams();
    parametros = parametros.append("operationName", "SearchOffersQuery");
    parametros = parametros.append("extensions", '{"persistedQuery":{"version":1,"sha256Hash":"8f28ad48873aa383599f5649a90433ce9987d02612a9971ee903135046f6afd8"}}');
    parametros = parametros.append("variables", '{"query":"' + texto + '","sortBy":"CREATED_AT"}');
    
    let response = this.service.consultaServiceRest().get<PelandoResponse>('/pelando-api/api/graphql', {params: parametros});
    // return response.subscribe(res => res.data.public.searchOffers.edges.filter(off => off.status == "ACTIVE"));

    //response.subscribe(res => produtosAtivos.concat(res.data.public.searchOffers.edges.filter(off => off.status == "ACTIVE")));

    let teste = await firstValueFrom(response);
    this.promocoes.concat(teste.data.public.searchOffers.edges.filter(off => off.status == "ACTIVE"));

    // await response.subscribe(res => {
    //   let retorno = res.data.public.searchOffers.edges.filter(off => off.status == "ACTIVE");
    //   this.promocoes.concat(retorno);
    //   console.log(this.promocoes);
    // });
  }*/
}