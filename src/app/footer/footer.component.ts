import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../assets/css/style.scss']
})
export class FooterComponent implements OnInit {
  slideIndex = 1
  constructor() { }

  ngOnInit(): void {
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log(slides)
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[this.slideIndex-1].style.display = "block";
    // dots[this.slideIndex-1].className += " active";
  }

}
