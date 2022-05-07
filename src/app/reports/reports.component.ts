import { Component, OnInit } from '@angular/core';
import { CovidsamaryService } from '../covidsamary.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _CovidsamaryService:CovidsamaryService) { }
  mapa!: mapboxgl.Map;
  country:string=''
  countrydetails:any=''
  today:any[]=[]
  test:any[]=[]
  testt:any ={
    count:'',
    TotalConfirmed:' ',
    TotalDeaths:' ',
  }

  ngOnInit(): void {
    this.mapa = new mapboxgl.Map({
      accessToken:'pk.eyJ1IjoibS16ZXpvIiwiYSI6ImNsMHp1MXduMjAwamwzZm1ncXFiZnE0MTkifQ.rlhZsotmGLx2zSyUgdLuCg',
      container: 'map-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [30.8, 26.82], // starting position
      zoom: 3 // starting zoom
    });



    this.mapa.on('click',(e)=>{
      this._CovidsamaryService.getdetails(this.country).subscribe((response)=>{
        this.today = response.slice(-1)
        for(let i=0 ;i<this.today.length;i++){
            this.testt.TotalConfirmed = this.today[i].Confirmed
            this.testt.TotalDeaths = this.today[i].Deaths
        }
      })
      this._CovidsamaryService.test(e.lngLat.lng,e.lngLat.lat).subscribe((res)=>{
        this.country=res.features[0].place_name
      })


    })
    }
}
