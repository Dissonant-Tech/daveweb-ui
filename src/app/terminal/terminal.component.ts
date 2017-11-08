import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  private _greeting = '   ___            _    _____          __    _                     _    \r\n  \/ _ \\___ __  __(_)__\/ \/ _ \\___  ___\/ \/___(_)__ ___ _____ ___   (_)__ \r\n \/ \/\/ \/ _ `\/ |\/ \/ \/ _  \/ , _\/ _ \\\/ _  \/ __\/ \/ _ `\/ \/\/ \/ -_)_ \/_ \/ \/ _ \\\r\n\/____\/\\_,_\/|___\/_\/\\_,_\/_\/|_|\\___\/\\_,_\/_\/ \/_\/\\_, \/\\_,_\/\\__\/\/__(_)_\/\\___\/\r\n                                           \/___\/                       \r\n';

  private _animating = false;

  constructor(public el: ElementRef) { }

  progress(percent, width) {
    const size = Math.round(width * percent / 100);
    let left = '', taken = '', i;
    for (i = size; i--;) {
      taken += '=';
    }
    if (taken.length > 0) {
      taken = taken.replace(/=$/, '>');
    }
    for (i = width - size; i--;) {
      left += ' ';
    }
    return '[' + taken + left + '] ' + percent + '%';
  }

  ngAfterViewInit() {
    // initialize terminal object
    const t = $(this.el.nativeElement).terminal(function(cmd, terminal) {
      // $rootScope.$emit(namespace, input, terminal);
    }, {
      greetings: this._greeting
    });

    // receiving echo commands\
    // $rootScope.$on(namespace + '.echo', function (e, msg) {
    //   t.echo(msg);
    // });

  }

}
