import { Component, AfterViewInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  @Input() greeting = 'Hello';
  @Input() commands: any;
  @Output() term: EventEmitter<Function> = new EventEmitter<Function>();

  private _term: any;
  private _animating = false;

  constructor(public el: ElementRef) { }

  ngAfterViewInit() {

    this._term = $(this.el.nativeElement).terminal(this.commands, {
      greetings: this.greeting,
      clear: false
    });

    this.term.emit(this._term);
  }
}
