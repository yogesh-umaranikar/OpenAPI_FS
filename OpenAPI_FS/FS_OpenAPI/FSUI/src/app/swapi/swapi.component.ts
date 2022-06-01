import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-swapi',
  templateUrl: './swapi.component.html',
  styleUrls: ['./swapi.component.css']
})
export class SwapiComponent implements OnInit {

  swapi : any;
  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
    this.showSwapi();
  }

  showSwapi() {
    this.configService.getSwapi()
      .subscribe((data: any) => {
        this.swapi = data.results;
        console.log(data.results);
      });
  }
}
