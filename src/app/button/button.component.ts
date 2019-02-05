import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    
  @Input() display: string;
  @Output() clicked = new EventEmitter();

  ngOnInit() {
  }

  handleClick(event) {
    console.log("button client");
    console.log(event);
    this.clicked.emit(event);
  }
}
