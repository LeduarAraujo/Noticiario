import { Component, OnInit } from '@angular/core';
import { AdrenalineService } from '../adrenaline.service';

@Component({
  selector: 'app-adrenaline',
  templateUrl: './adrenaline.component.html',
  styleUrls: ['./adrenaline.component.scss']
})
export class AdrenalineComponent implements OnInit {

  constructor(private service: AdrenalineService) { }

  ngOnInit(): void {
  }

  listarNoticiasAdrenaline() {
    this.service.listarNewsLetterAdrenaline().subscribe(res => res);
  }

}
