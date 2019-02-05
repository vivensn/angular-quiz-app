import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {

 display = 'Start quiz';
 @Output() start = new EventEmitter();

  ngOnInit() {
  }

  clicked(event) {
    console.log('start-button clicked')
    this.start.emit(event);
  }
  

}
