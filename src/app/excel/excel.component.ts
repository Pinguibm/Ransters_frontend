import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
import { DataserviceService} from '../dataservice.service'

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {
  data : any;
  constructor( private dataservice : DataserviceService) { }

  ngOnInit(): void {

    this.dataservice.getdetail_buyer().subscribe(details =>{
      this.data=details  
      console.log(details)           
    })
  }


	
    /*name of the excel-file which will be downloaded. */ 
    fileName= 'ExcelSheet.xlsx';  
    
    exportexcel(): void 
        {
           /* table id is passed over here */   
           let element = document.getElementById('excel-table'); 
           const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    
           /* generate workbook and add the worksheet */
           const wb: XLSX.WorkBook = XLSX.utils.book_new();
           XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
           /* save to file */
           XLSX.writeFile(wb, this.fileName);
          
        }


        

//    exportexcel(data): void
//    {

//      console.log(data)
//      if (data == 'Buyer') {
//        this.dataservice.getdetail_buyer().subscribe(details =>{
//          this.data=details  
//          console.log(details)           
//        })
//      } else {
//        this.dataservice.getdetail_seller().subscribe(details =>{
//          this.data=details             
//        })
//      }

//    setTimeout(()=>{
//      console.log('inside')
//      this.excel()

//    },300)
   

//  }

//  excel(){
//    let element = document.getElementById('excel-table');
//    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

//    console.log(ws)

//    /* generate workbook and add the worksheet */
//    const wb: XLSX.WorkBook = XLSX.utils.book_new();
//    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

//    /* save to file */  
//    XLSX.writeFile(wb, this.fileName);
//  }

    }


