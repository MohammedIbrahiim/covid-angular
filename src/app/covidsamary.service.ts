import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidsamaryService {

  constructor(private _HttpClient:HttpClient) {}

  getCountry():Observable <any> {
    return this._HttpClient.get('https://api.covid19api.com/summary')
  }

  getdetails(country:any):Observable<any>{
    return this._HttpClient.get(`https://api.covid19api.com/live/country/${country}/status/confirmed/date/2020-04-01T00:00:00Z`)
  }

  test(lng:any,lat:any):Observable<any>{
    return this._HttpClient.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=country&access_token=pk.eyJ1IjoibS16ZXpvIiwiYSI6ImNsMHp1MXduMjAwamwzZm1ncXFiZnE0MTkifQ.rlhZsotmGLx2zSyUgdLuCg`)
  }
}
