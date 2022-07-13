import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  items!: any [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.api.getJson().subscribe(Response=>{
      // console.log('resp',Response)
      this.items = Response
    })
  }



}
