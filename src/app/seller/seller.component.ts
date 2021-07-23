import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css',
    '../../assets/css/style.scss']
})
export class SellerComponent implements OnInit {

  constructor(private dataservice: DataserviceService) { }

  ngOnInit(): void {
  }

  UpdateDetail(data) {
    console.log(data)
    this.dataservice.adddetail_seller(data).subscribe(details => {
      console.log(details)
    })
  }

  onCountrySelected(data){
    console.log(data)
  }

}
