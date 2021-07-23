import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../assets/css/style.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imageObject = [{
    image: '../assets/images/glassesoncomputer.jpg',
    thumbImage: '../assets/images/glassesoncomputer.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
    image: '../assets/images/macontable.jpg',
    thumbImage: '../assets/images/macontable.jpg',
    title: 'Hummingbirds are amazing creatures'
}, {
  image: '../assets/images/DF.jpg',
  thumbImage: '../assets/images/DF.jpg',
  title: 'Hummingbirds are amazing creatures'
}, {
  image: '../assets/images/DF2.jpg',
  thumbImage: '../assets/images/DF2.jpg',
  title: 'Hummingbirds are amazing creatures'
}, {
  image: '../assets/images/DF3.jpg',
  thumbImage: '../assets/images/DF3.jpg',
  title: 'Hummingbirds are amazing creatures'
}, {
  image: '../assets/images/DF4.jpg',
  thumbImage: '../assets/images/DF4.jpg',
  title: 'Hummingbirds are amazing creatures'
}, {
  image: '../assets/images/DF6.jfif',
  thumbImage: '../assets/images/DF6.jfif',
  title: 'Hummingbirds are amazing creatures'
}, {
  image: '../assets/images/DF7.jfif',
  thumbImage: '../assets/images/DF7.jfif',
  title: 'Hummingbirds are amazing creatures'
}];
  // slides = [
  //   {img: "http://placehold.it/350x150/000000"},
  //   {img: "http://placehold.it/350x150/111111"},
  //   {img: "http://placehold.it/350x150/333333"},
  //   {img: "http://placehold.it/350x150/666666"}
  // ];
  // slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  // document.addEventListener('DOMContentLoaded', function () {
  //   new Splide( '#card-slider', {
  //     perPage    : 2,
  //     breakpoints: {
  //       600: {
  //         perPage: 1,
  //       }
  //     }
  //   } ).mount();
  // } );

}
