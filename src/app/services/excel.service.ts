import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workbook} from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  workbook = new Workbook();
  constructor() { }
  createWExcel(data:any[],tabName:string, fileName:string ){
    let worksheet = this.workbook.addWorksheet(tabName);
    let header= Object.getOwnPropertyNames(data[0])
    let headerRow = worksheet.addRow(header);
    for (let x1 of data){
        let x2=Object.keys(x1);
        let temp=[]
        for(let y of x2){temp.push(x1[y]) }
        worksheet.addRow(temp)
    }
    //add data and file name and download
    this.workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, fileName +'-'+new Date().valueOf()+'.xlsx');
    });
  }

}
