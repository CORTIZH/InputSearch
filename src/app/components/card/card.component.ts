import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() swapi!: any;
  @Output() selection = new EventEmitter()

  setSelection(id:string){
    this.selection.emit(id)
  }
}
