import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {

  public cards = [];

  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.getAll().then((resp) => {
      console.log(resp);
      this.cards = resp.results;
    });
  }

}
