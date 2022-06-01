import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  chucks = [];
  constructor(private configService:ConfigService) { }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: any) => {
          this.chucks = data;
      });
  }

}
