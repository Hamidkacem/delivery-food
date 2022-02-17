import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from './CommonService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: any;
  private sub: Subscription; 

  constructor(private Service: CommonService) {
    // subscribe to sender component messages
    this.sub= this.Service.getUpdate().subscribe
     (x => { //message contains the data sent from service
      console.log(x["text"].nameFood
      )
     this.count = x["text"].counter;
     });
}
  // ngOnInit(){


  // }



}
