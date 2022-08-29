import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock/stock.service';
import { Stock } from '../shared/stock/models/stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  public stocks: Stock[];

  constructor(private stockService: StockService) {
    this.stocks = [];
  }

  ngOnInit(): void {
    this.getStocks();
  }

  public getStocks(): void {
    this.stockService.getStocks().subscribe(
      (response: Stock[]) => {
        this.stocks = response;
        console.log(this.stocks)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  changeIsoDateToCustomDate(date: string): string {
    const clockText: string = "Uhr";

    let dateList: string[] = date.split("T", 2);
    let dateWithDots: string = this.getDateWithDotFormat(dateList[0]);
    let timeWithoutMilisec: string = this.getDateTime(dateList[1].split("+", 1)[0]);

    let formattedDate = dateWithDots + " " + timeWithoutMilisec + " " + clockText;
    return formattedDate;
  }

  getDateWithDotFormat(parsedDate: string): string {
    let tempDateList: string[] = parsedDate.split("-", 3);

    let day = tempDateList[2];
    let month = tempDateList[1];
    let year = tempDateList[0];

    let date = day + "." + month + "." + year;
    return date;
  }

  getDateTime(parsedTime: string): string{
    let dateTime: string = parsedTime.split(".", 1)[0];
    let dateTimeList: string[] = dateTime.split(":",3);

    let hour = dateTimeList[0];
    let minute = dateTimeList[1];

    let time: string = hour + ":" + minute;
    return time;
  }
}
