import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { RequestService } from "../services/request.service";
import { NotificationService } from '../notification.service';
import { Router,  ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-starttable',
  templateUrl: './starttable.component.html',
  styleUrls: ['./starttable.component.css']
})
export class StarttableComponent implements OnInit {
  title = 'toaster-not';
  // Zones: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  // Loms: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  tabletypes: any = ['Select TableType','LiveTable', 'Virtual Table', 'Association', 'Virtual international'];
  form: any;
  Zones: any;
  Loms: any;
  Countrys: any;
  group:any;
  edata1:any;
  
  constructor(private http: HttpClient,private request: RequestService, private router: Router,private notifyService : NotificationService) {

     this.group = new FormGroup({
      Country: new FormControl('', Validators.required),
      Zone: new FormControl('', Validators.required),
      Lom: new FormControl('', Validators.required),
      tabletype: new FormControl('', Validators.required),
      name:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      tablename:new FormControl('',Validators.required),
      total:new FormControl('',Validators.required),
    });
    
   }

   loadcountry() {
    this.http.get("https://admin.jcombiz.com/jcom/get_zone.php").subscribe(
      (response: any) => {
        this.Countrys = response[0].country_name;
        console.log( this.Countrys);
      },
      error => {
        console.log(error);
      }
    );
  }

   loadZones() {
    this.http.get("https://admin.jcombiz.com/jcom/get_zone.php").subscribe(
      (response: any) => {
        this.Zones = response[0];
        console.log( this.Zones);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadlom(zone:any) {
    this.http.get("https://admin.jcombiz.com/jcom/get_lom.php?zone="+zone).subscribe(
      (response: any) => {
        this.Loms = response;
        console.log( this.Loms);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.loadZones();
    this.loadcountry();
  }
  get f(){
    return this.group.controls;
  }
  Submit(){
    // if (this.group.invalid) {
    //   return;
    // }

     this.edata1 = {
      full_name: this.group.get("name").value,
      mobile_no: this.group.get("mobile").value,
      email_id: this.group.get("email").value,
      country: this.group.get("Country").value,
      zone: this.group.get("Zone").value,
      lom: this.group.get("Lom").value,
      city: this.group.get("city").value,
      table_name: this.group.get("tablename").value,
      table_type: this.group.get("tabletype").value,
      total_members: this.group.get("total").value
    };
     
      console.log("ssssssssssssssssss1",""+this.edata1);
      // console.log("ssssssssssssssssss2",""+edata1.mobile_no);
      // console.log("ssssssssssssssssss3",""+edata1.email_id);
      // console.log("ssssssssssssssssss4",""+edata1.country);
      // console.log("ssssssssssssssssss5",""+edata1.zone);
      // console.log("ssssssssssssssssss6",""+edata1.lom);
      // console.log("ssssssssssssssssss7",""+edata1.city);
      // console.log("ssssssssssssssssss8",""+edata1.table_name);
      // console.log("ssssssssssssssssss9",""+edata1.table_type);
      // console.log("ssssssssssssssssss0",""+edata1.total_members);

    this.request.addtable1(this.edata1).subscribe(
      (res: any) => {
        console.log("sucess",""+res[0].status)
        if (res[0].status == "Your Request Submitted Successfully!!NHQ Will Reach you Shortly.") {
          console.log("sucess",""+res.status)
          this.notifyService.showSuccess("Your Request Submitted Successfully!!NHQ Will Reach you Shortly", "");
          this.router.navigate(['']);
        } else if (res[0].status == "error") {
          this.notifyService.showError("Something is wrong", "")
        }
      },
      error => {
        console.log("error",""+error)
      }
    );

  }
}
