import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {

  public cards = [
    {
      header: 'Test',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
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
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      classes: 'text-center',
      header: 'test header'
    },
    {
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      classes: 'text-center',
      image: 'http://www.wallpapereast.com/static/images/High-Definition-Ultra-HD-Wallpaper.jpg'
    },
    {
      header: 'with header',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      classes: 'text-center',
      image: 'http://www.wallpapereast.com/static/images/High-Definition-Ultra-HD-Wallpaper.jpg'
    },
    {
      title: 'with title',
      text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
      classes: 'text-center',
      image: 'http://www.wallpapereast.com/static/images/High-Definition-Ultra-HD-Wallpaper.jpg'
    },
  ];

  constructor(private service: CardService) { }

  ngOnInit() {
    this.service.getAll().then((resp) => {
      console.log(resp);
      this.cards = resp.results;
    });
  }

}
