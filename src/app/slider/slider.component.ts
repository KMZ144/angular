import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
   imgSrc:string[]=["assets/imgs/1.jpg","assets/imgs/2.jpg","assets/imgs/3.jpg"];
   src:string=this.imgSrc[0];
   i:number=0;
   next() {
    if(this.i==this.imgSrc.length){
      this.i=0
    }
    this.src=this.imgSrc[this.i]
    this.i++;

  }
  // function prev() {
  //   if(i==imgSrc.length){
  //     i=0
  //   }
  //   i++;
  //   src=

  // }

}
