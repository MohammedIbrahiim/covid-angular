import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidsamaryService } from '../covidsamary.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
countrydetails:any=''
country:any[]=[]
test:any[]=[]
test2:any[]=[]
testdate:any[]=[]
Confirmed:any[]=[]
Death:any[]=[]
date:any[]=[]
chartConfirmed:any=[]
totalconfirmed:any[]=[]
Deaths:any[]=[]
testt:any ={
  count:'',
  TotalConfirmed:0,
  TotalDeaths:0
}
  constructor(private _ActivatedRoute:ActivatedRoute, private _CovidsamaryService:CovidsamaryService) {
   }

  ngOnInit(): void {
    this.countrydetails = this._ActivatedRoute.snapshot.params['country'];
    this._CovidsamaryService.getdetails(this.countrydetails).subscribe((response)=>{
      this.country = response;
      this.test2 = this.country.slice(-10)
        for(let i =0 ; i<this.test2.length;i++){
          this.testdate.push(this.test2[i].Date.slice(5,10))
          this.Confirmed.push(this.test2[i].Confirmed)
          this.Death.push(this.test2[i].Deaths)
        }
      this.chartConfirmed = new Chart('myChart', {
        type: 'bar',
        data: {
            labels:this.testdate ,
            datasets: [{
                label: 'Confirmed cases in last 10 days',
                data: this.Confirmed,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },




    })

  this.chartConfirmed = new Chart('myChart2', {
    type: 'bar',
    data: {
        labels:this.testdate ,
        datasets: [{
            label: '# Deaths Cases in last 10 days',
            data: this.Death,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },




})
    })
    this._CovidsamaryService.getCountry().subscribe((response)=>{
      this.test = response.Countries;
      for(let i = 0 ; i<this.test.length;i++){
        if(this.countrydetails == this.test[i].Country){
            this.testt.count = this.test[i].Country;
            this.testt.TotalConfirmed = this.test[i].TotalConfirmed;
            this.testt.TotalDeaths = this.test[i].TotalDeaths;
            console.log(this.testt.count)
        }
      }

    })
  }
}



