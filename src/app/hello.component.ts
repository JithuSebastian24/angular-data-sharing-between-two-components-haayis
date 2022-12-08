import { Component, Output, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}!</h1>
    <button (click)="changeName()">Change Name from Hello Component</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class HelloComponent  {
  @Input() nameObject: any;

  @Input() name: string;

  @Output() nameChanged: EventEmitter<string> = new EventEmitter<string>();

  changeName() {
    this.name = 'Angular 8';
    this.nameChanged.emit(this.name);
  }
}
