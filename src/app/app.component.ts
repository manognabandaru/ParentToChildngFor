import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  num=0;
  clear;
  even=[];
  odd=[];

  start(){
  this.clear = setInterval(()=>{
      this.num = this.num + 1;
      console.log(this.num);
      if (this.num%2==0)
      {
    this.even.push(this.num);
    console.log(this.num + "even");
    } 
     else {
      this.odd.push(this.num);
      console.log(this.num + "add");

     }
    },500);  

  }

  stop(){
    clearInterval(this.clear);
  }
}
