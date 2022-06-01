import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  inputString: any ;
  outputResult: any;
  constructor(private configService: ConfigService ) { }

  ngOnInit(): void {
  }

  Callme() {
    this.configService.getChuckbyID(this.inputString)
    .subscribe((data: any) => {
      this.outputResult = data      
      console.log('output', this.outputResult.value)});
    console.log('it does nothing',this.inputString);
    }
}
