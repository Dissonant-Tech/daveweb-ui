import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          transform: 'translateY(10%)',
          opacity: 0
        }),
        animate(450)
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
