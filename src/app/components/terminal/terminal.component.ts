import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  private _greeting = '   ___            _    _____          __    _                     _    \r\n  \/ _ \\___ __  __(_)__\/ \/ _ \\___  ___\/ \/___(_)__ ___ _____ ___   (_)__ \r\n \/ \/\/ \/ _ `\/ |\/ \/ \/ _  \/ , _\/ _ \\\/ _  \/ __\/ \/ _ `\/ \/\/ \/ -_)_ \/_ \/ \/ _ \\\r\n\/____\/\\_,_\/|___\/_\/\\_,_\/_\/|_|\\___\/\\_,_\/_\/ \/_\/\\_, \/\\_,_\/\\__\/\/__(_)_\/\\___\/\r\n                                           \/___\/                       \r\n[[b;#f6f6f6;]Welcome to my site!]\n\nType [[b;#f6f6f6;]whoami] to get some information about me, and [[b;#f6f6f6;]help] if you dont know what to do next.\n'

  private _term: any;
  private _animating = false;
  private _commandMap = {
    'help': () => {
      this._term.echo(this.genHelpText());
    },
    'echo': function(text) {
      this.echo(text);
    },
    'whoami': () => {
      this._term.echo('David Rodriguez, Software Developer');
    },
    'clear': () => {
      this._term.clear();
      this._term.echo(this._greeting);
    }
  };

  constructor(public el: ElementRef) { }

  genHelpText() {
    return `Available commands:\n ${Object.keys(this._commandMap)}`;
  }

  ngAfterViewInit() {
    this._term = $(this.el.nativeElement).terminal(this._commandMap, {
      greetings: this._greeting,
      clear: false
    });
  }

}
