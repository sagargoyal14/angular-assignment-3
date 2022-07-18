import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show=true;

  timeStamps : any[] = []

  toggleDisplay(){
    this.show=!this.show;
    this.timeStamps.push(new Date());
  }

}
