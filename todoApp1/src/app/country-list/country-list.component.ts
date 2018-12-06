import { Component, OnInit } from '@angular/core';
import { HttpConnectService } from '../http-connect.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(public httpConnectService:HttpConnectService) { }
  countriesList:Array<object>=[];
  searchKey;
  ngOnInit() {
  }
  getCountries(){
    this.httpConnectService.getCountryDetails().subscribe((response)=>{
      this.countriesList=response;
      console.log(this.countriesList);
    })
  }
  getCountriesByName(){
    this.httpConnectService.getCountriesByName(this.searchKey).subscribe((response)=>{
      this.countriesList=response;
      console.log(this.countriesList)
    })
  }
}
