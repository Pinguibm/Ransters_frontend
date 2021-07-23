import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service'


@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css',
    '../../assets/css/style.scss']
})
export class BuyerComponent implements OnInit {

  url = "https://api.first.org/data/v1/countries";



  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {


    fetch(this.url).then(response => {
      response.json().then(data => {
        console.log(data.data)
      })
    })
  }


  UpdateDetail(data) {
    console.log(data)
    this.dataservice.adddetail_buyer(data).subscribe(details => {
      console.log(details)
    })
  }
}
