import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['../../assets/css/style.scss']
})
export class ExportComponent implements OnInit {

  fileName= 'ExcelSheet.xlsx';
  data : any;
  hide : Boolean
  selectedValue = 'Buyer'
  constructor(private dataservice : DataserviceService) { }
  
  ngOnInit(): void {}


  exportArray(data) {

  
      if (data == 'Buyer') {
        this.dataservice.getdetail_buyer().subscribe(details =>{
          this.data=details  
                    
        })
      } else {
        this.dataservice.getdetail_seller().subscribe(details =>{
          this.data=details             
        })
      }
   
    setTimeout(()=>{
 
      var wb = XLSX.utils.book_new();
      var ws = XLSX.utils.json_to_sheet(this.data);
      XLSX.utils.book_append_sheet(wb, ws, data);
      XLSX.writeFile(wb,data+".xlsx");

    },300)
    
  }

 

  
}
