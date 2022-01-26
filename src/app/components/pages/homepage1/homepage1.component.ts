import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../../services/request.service";
import { interval, Subscription} from 'rxjs';
@Component({
  selector: 'app-homepage1',
  templateUrl: './homepage1.component.html',
  styleUrls: ['./homepage1.component.css']
})
export class Homepage1Component implements OnInit {
  datas: any;
  tables: any;
  members: any;
  connect: any;
  gnote: any;
 mySubscription: Subscription

  constructor(private request: RequestService) { }
 

 ngOnInit(){
  this.showhome();
  }


  async showhome(){
    await this.request.getdata().subscribe(
      response => {
        this.datas = response[0];
        this.tables=this.datas.tables;
        this.members=this.datas.members;
        this.connect=this.datas.connect;
        this.gnote=this.datas.gnote;
        console.log("data",this.tables);
        console.log("data1",this.members);
        console.log("data2",this.connect);
        console.log("data3",this.gnote);
      },
      error => {
        console.log(error);
      }
    );  }
}