import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  term: any;
  greeting =  '   ___            _    _____          __    _                     _    \r\n  \/ _ \\___ __  __(_)__\/ \/ _ \\___  ___\/ \/___(_)__ ___ _____ ___   (_)__ \r\n \/ \/\/ \/ _ `\/ |\/ \/ \/ _  \/ , _\/ _ \\\/ _  \/ __\/ \/ _ `\/ \/\/ \/ -_)_ \/_ \/ \/ _ \\\r\n\/____\/\\_,_\/|___\/_\/\\_,_\/_\/|_|\\___\/\\_,_\/_\/ \/_\/\\_, \/\\_,_\/\\__\/\/__(_)_\/\\___\/\r\n                                           \/___\/                       \r\n[[b;#f6f6f6;]Welcome to my site!]\n\nType [[b;#f6f6f6;]whoami] to get some information about me, and [[b;#f6f6f6;]help] if you dont know what to do next.\n';

  commands = {
    'help': () => {
      this.getTerm().echo(this.genHelpText());
    },
    'echo': function(text) {
      this.echo(text);
    },
    'whoami': () => {
      this.getTerm().echo('David Rodriguez, Software Developer');
    },
    'clear': () => {
      this.getTerm().clear();
      this.getTerm().echo(this.greeting);
    },
    'about': () => {
      this.router.navigate(['/about']);
    }
  };

  constructor(private router: Router) {}

  genHelpText() {
    return `Available commands:\n\t ${Object.keys(this.commands)}`;
  }

  setTerm(term) {
    this.term = term;
  }

  getTerm() {
    return this.term;
  }
}
