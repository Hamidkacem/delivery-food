import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
isRated1 = false;
isRated2 = false;
isRated3 = false;
isRated4 = false;
isRated5 = false;
isRated6 = false;
isRated7 = false;
isRated8 = false;
isRated9 = false;
isRated10 = false;
isRated11 = false;
isRated12 = false;
isRated13 = false;
isRated14 = false;
isRated15 = false;
  constructor() { }

  ngOnInit(): void {
  }
  changeRating1(){
    this.isRated1 = !this.isRated1;
  }
  changeRating2(){
    this.isRated2 = !this.isRated2;
  }
  changeRating3(){
    this.isRated3 = !this.isRated3;
  }
  changeRating4(){
    this.isRated4 = !this.isRated4;
  }
  changeRating5(){
    this.isRated5 = !this.isRated5;
  }
  changeRating6(){
    this.isRated6 = !this.isRated6;
  }
  changeRating7(){
    this.isRated7 = !this.isRated7;
  }

  changeRating8(){
    this.isRated8 = !this.isRated8;
  }

  changeRating9(){
    this.isRated9 = !this.isRated9;
  }

  changeRating10(){
    this.isRated10 = !this.isRated10;
  }

  changeRating11(){
    this.isRated11 = !this.isRated11;
  }

  changeRating12(){
    this.isRated12 = !this.isRated12;
  }
  changeRating13(){
    this.isRated13 = !this.isRated13;
  }
  changeRating14(){
    this.isRated14 = !this.isRated14;
  }

  changeRating15(){
    this.isRated15 = !this.isRated15;
  }









}
