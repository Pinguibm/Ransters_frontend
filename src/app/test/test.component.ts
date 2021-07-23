import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['../../assets/css/style.scss']
})
export class TestComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

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
}];


    @HostListener('window:scroll', [])
    onWindowScroll() {
      if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('header').classList.add('sticky');
      }
      else if (document.documentElement.scrollTop < 20) {
        document.getElementById('header').classList.remove('sticky');
      }
    }
}
