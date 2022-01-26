import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { RequestService } from "../services/request.service";
import { NotificationService } from '../notification.service';
import { Router,  ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'toaster-not';
  // Zones: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  // Loms: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];

  form: any;
  Zones: any;
  Loms: any;
  Countrys: any;
  group:any;
  edata1:any;
  zoneid:any;
  table: any;
  tabletypes: any;
  businesscategory: any;
  rzp1: any;
  showrefer: boolean;
  
  constructor(private http: HttpClient,private request: RequestService, private router: Router,private notifyService : NotificationService) {

     this.group = new FormGroup({
      Country: new FormControl('', Validators.required),
      Zone: new FormControl('', Validators.required),
      Lom: new FormControl('', Validators.required),
      tabletype: new FormControl('', Validators.required),
      name:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      membership_id:new FormControl('',Validators.required),
      table:new FormControl('',Validators.required),
      businesscategory:new FormControl('',Validators.required),
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
  loadTabletypes() {
    this.http.get("https://admin.jcombiz.com/jcom/get_meeting_type.php").subscribe(
      (response: any) => {
        this.tabletypes = response;
        console.log("tabletypes",this.tabletypes);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadlom(zone:any) {
    this.zoneid=zone;
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
  loadTable(zone:any) {
    console.log("meeting_type",zone);
    console.log("zone",this.zoneid);
    this.http.get("https://admin.jcombiz.com/jcom/get_table.php?meeting_type="+zone+"&zone="+ this.zoneid).subscribe(
      (response: any) => {
        this.table = response;
        console.log("table",this.table);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadBusinesscategory(zone:any) {
    console.log("meeting_type",zone);

 
    this.http.get("https://admin.jcombiz.com/jcom/get_bc.php?table="+zone).subscribe(
      (response: any) => {
        this.businesscategory = response;
        console.log("table",this.businesscategory);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadBusiness(zone:any) {
    console.log("loadBusiness",zone);
 for (let i = 0; i < this.businesscategory.length; i++) {
      if (this.businesscategory[i].id == zone) {
          console.log("this.business[i].count :",this.businesscategory[i].count);
          if(this.businesscategory[i].count != "0"){
            this.notifyService.showError("Selected Business Category is Occupied by another Partner,Please Choose different Business Category / Table", "");
            console.log("Selected Business Category is Occupied by another Partner,Please Choose different Business Category / Table")
          }else{
            this.notifyService.showSuccess("bussiness ok", "");
            console.log("bussiness ok")
          }

       }
    
  }
}
  ngOnInit(): void {
    this.loadZones();
    this.loadcountry();
    this.loadTabletypes();
  }

  options = {
    "key": "rzp_test_J60bqBOi1z1aF5", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
  get f(){
    return this.group.controls;
  }

 showgstview(){
  this.showrefer=true;
 }
 showpanview(){
  this.showrefer=false;
 }
  Submit(){
    // if (this.group.invalid) {
    //   return;
    // }
    // this.rzp1 = new this.request.nativeWindow.Razorpay(this.options);
    // this.rzp1.open();


     this.edata1 = {
      name: this.group.get("name").value,
      mobile_no: this.group.get("mobile").value,
      email_id: this.group.get("email").value,
      password: this.group.get("password").value,
      country: this.group.get("Country").value,
      zone: this.group.get("Zone").value,
      lom: this.group.get("Lom").value,
      membership_id: this.group.get("membership_id").value,
      table: this.group.get("table").value,
      business_category: this.group.get("businesscategory").value,
      meeting_type: this.group.get("tabletype").value,
      payment_id: this.group.get("mobile").value
    };
     
      console.log(this.edata1);
      // console.log("ssssssssssssssssss2",""+edata1.mobile_no);
      // console.log("ssssssssssssssssss3",""+edata1.email_id);
      // console.log("ssssssssssssssssss4",""+edata1.country);
      // console.log("ssssssssssssssssss5",""+edata1.zone);
      // console.log("ssssssssssssssssss6",""+edata1.lom);
      // console.log("ssssssssssssssssss7",""+edata1.city);
      // console.log("ssssssssssssssssss8",""+edata1.table_name);
      // console.log("ssssssssssssssssss9",""+edata1.table_type);
      // console.log("ssssssssssssssssss0",""+edata1.total_members);

    this.request.addtable(this.edata1).subscribe(
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
