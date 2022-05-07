import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { CovidsamaryService } from '../covidsamary.service';

declare var $:any;
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  totalConfirmed:number = 0;
  TotalDeaths:number = 0;
  today = new Date().toLocaleDateString('default',{month:"long",day:"numeric" ,year:"numeric"})
  constructor(private _CovidsamaryService:CovidsamaryService ) { }

  ngOnInit(): void {
    this._CovidsamaryService.getCountry().subscribe((respone)=>{
      this.totalConfirmed =  respone.Global.TotalConfirmed;
      this.TotalDeaths = respone.Global.TotalDeaths;
      })

      //jquery
      let safedest = $('#safe').offset().top;
      $(window).scroll(function(){
        let wscroll = $(window).scrollTop();
        if(wscroll>safedest){
          $('#arrow').css("display","flex")
        }else{
          $('#arrow').css("display","none")
        }
      })


  }

}
