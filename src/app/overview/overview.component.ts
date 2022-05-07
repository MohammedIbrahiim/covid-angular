import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidsamaryService } from '../covidsamary.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
 newConfirmed:number = 0;
 totalConfirmed:number = 0;
 NewDeaths:number = 0;
 TotalDeaths:number = 0;
 Countries:any[]=[];

  constructor(private _CovidsamaryService:CovidsamaryService) { }

  ngOnInit(): void {
    this._CovidsamaryService.getCountry().subscribe((respone)=>{
    this.newConfirmed = respone.Global.NewConfirmed;
    this.totalConfirmed =  respone.Global.TotalConfirmed;
    this.NewDeaths = respone.Global.NewDeaths;
    this.TotalDeaths = respone.Global.TotalDeaths;
    this.Countries = respone.Countries;
    })
  }

}
