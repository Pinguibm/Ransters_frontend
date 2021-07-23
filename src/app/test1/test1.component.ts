import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['../../assets/css/style.scss']
})
export class Test1Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }
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
