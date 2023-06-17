import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {

  @Output() emitter = new EventEmitter();

  @Input() title = '';
  @Input() backButton = false;
  @Input() menuButton = false;

  constructor() { }

  ngOnInit() {}

  alguemMeClicou(){
    console.log('Alguém me clicou! ALÁ');
    this.emitter.emit({item: 'toolbarClick'})
  }

}
