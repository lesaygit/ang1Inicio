import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h2>Contador Angular en {{title}}</h2>
    <button (click)="count = count +1">Add one</button> 
    <button (mousemove)="resetMetod($event)">Reset</button><br>
    <p>{{ count }}</p>
  `,
  styles: [
    'h2{padding:6px;}',
    'button { font-weight: bold; border-radius: 8px; padding:12px;margin:4px}',
    'p{font-weight: bold; color:red; padding:12px;}'
  ]
})
export class AppComponent {
  title = 'app1 title';
  count = 0;

  resetMetod(event:MouseEvent):void{
    this.count=0;
    console.log(event);
  }
}
