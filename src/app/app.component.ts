import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  startQuiz(event) {
    console.log('Let us start the Quiz');
    console.log(event)
  }
}
