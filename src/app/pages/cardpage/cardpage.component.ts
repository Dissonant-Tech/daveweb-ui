import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss'],
})
export class CardpageComponent implements OnInit {

  public cards = [];

  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.getAll().then((resp) => {
      console.log(resp);
      this.cards = resp.results;
    });
  }

}
