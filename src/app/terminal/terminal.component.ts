import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  private _greeting = '   ___            _    _____          __    _                     _    \r\n  \/ _ \\___ __  __(_)__\/ \/ _ \\___  ___\/ \/___(_)__ ___ _____ ___   (_)__ \r\n \/ \/\/ \/ _ `\/ |\/ \/ \/ _  \/ , _\/ _ \\\/ _  \/ __\/ \/ _ `\/ \/\/ \/ -_)_ \/_ \/ \/ _ \\\r\n\/____\/\\_,_\/|___\/_\/\\_,_\/_\/|_|\\___\/\\_,_\/_\/ \/_\/\\_, \/\\_,_\/\\__\/\/__(_)_\/\\___\/\r\n                                           \/___\/                       \r\n';

  private _typedGreeting = "Welcome to my Site!";
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

  lengthOf(string) {
    string = $.terminal.strip(string);
    return $('<span>' + string + '</span>').text().length;
  }

  typed(finish_typing) {
    return function(term, message, delay, onDone) {
      this._animating = true;
      const prompt = term.get_prompt();
      let c = 0;
      if (message.length > 0) {
        term.set_prompt('');
        let new_prompt = '';
        const interval = setInterval(function() {
          const chr = $.terminal.substring(message, c, c + 1);
          new_prompt += chr;
          term.set_prompt(new_prompt);
          c++;
          if (c === this.lengthOf(message)) {
            clearInterval(interval);
            // execute in next interval
            setTimeout(function() {
              // swap command with prompt
              finish_typing(term, message, prompt);
              this._animating = false;
              if (onDone) {
                onDone();
              }
            }, delay);
          }
        }, delay);
      }
    };
  }

  loopProgress(text, i, term, size) {
      text = this.progress(i++, size);
      term.set_prompt(text);
      if (i < 100) {
        const timer = setTimeout(this.loopProgress, 100);
      } else {
        term.echo(this.progress(i, size) + ' [[b;green;]OK]').set_prompt(prompt);
        this._animating = false;
      }
  }

  showProgress(term, size) {
    const i = 0;
    const prompt = term.get_prompt();
    const text = this.progress(0, size);
    term.set_prompt(this.progress);
    this._animating = true;
    this.loopProgress(text, i, term, size);
  }

  typePrompt() {
    return this.typed(function(term, message, prompt) {
      term.set_prompt(message + ' ');
    });
  }

  typeMessage(term, message, prompt) {
  }

  ngAfterViewInit() {
    // initialize terminal object
    const t = $(this.el.nativeElement).terminal(function(cmd, terminal) {
      // $rootScope.$emit(namespace, input, terminal);
    }, {
      greetings: this._greeting,
      onInit: term => {
        this.showProgress(term, 10);
      }
    });

    // receiving echo commands\
    // $rootScope.$on(namespace + '.echo', function (e, msg) {
    //   t.echo(msg);
    // });
  }

}
