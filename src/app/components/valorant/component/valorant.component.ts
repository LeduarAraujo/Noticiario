import { Component, OnInit } from '@angular/core';
import { ValorantService } from '../valorant.service';

@Component({
  selector: 'app-valorant',
  templateUrl: './valorant.component.html',
  styleUrls: ['./valorant.component.scss']
})
export class ValorantComponent implements OnInit {

  constructor(private service: ValorantService) { }

  ngOnInit(): void {
  }

  listarNoticiasValorant() {
    console.log(this.service.listarNewsLetterValorant());
  }

}
