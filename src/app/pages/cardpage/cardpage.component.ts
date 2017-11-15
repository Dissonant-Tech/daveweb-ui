import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.scss'],
})
export class CardpageComponent implements OnInit {

  cards = [
    {
      title: 'Test',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      link: 'some-post',
      date: '2 Days Ago',
    },
    {
      title: 'Test',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      footer: 'test footer',
      classes: 'text-center'
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      classes: 'bg-primary text-white text-center p-3',
      footer: 'test footer'
    },
    {
      title: 'Test',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      footer: 'test footer',
      classes: 'text-center'
    },
    {
      title: 'Test',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      footer: 'test footer',
      classes: 'text-center'
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      classes: 'bg-secondary text-white text-center p-3',
      footer: 'test footer'
    },
  ];

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getAll();
  }

}
