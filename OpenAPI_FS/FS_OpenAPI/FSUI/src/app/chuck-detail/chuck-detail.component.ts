import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-chuck-detail',
  templateUrl: './chuck-detail.component.html',
  styleUrls: ['./chuck-detail.component.css']
})
export class ChuckDetailComponent implements OnInit {
   routeSub: any;
   details:any;
  constructor(private route: ActivatedRoute, private configService: ConfigService ) {
    
   }

   ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.showConfig(params['id']);
    });
  }
  
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  showConfig(id:string) {
    console.log(id);
    this.configService.getChuckbyID(id)
      .subscribe((data: any) => {
          this.details = data;
      });
  }

}
