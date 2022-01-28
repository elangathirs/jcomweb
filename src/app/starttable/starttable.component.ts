import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { RequestService } from "../services/request.service";
import { ICustomWindow, WindowRefService } from "../services/util.service";

@Component({
  selector: 'app-starttable',
  templateUrl: './starttable.component.html',
  styleUrls: ['./starttable.component.css']
})
export class StarttableComponent implements OnInit {
  title = 'toaster-not';
  // Zones: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  // Loms: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  tabletypes: any = ['Select TableType', 'LiveTable', 'Virtual Table', 'Association', 'Virtual international'];
  form: any;
  Zones: any;
  Loms: any;
  Countrys: any;
  group: any;
  isOTP: boolean = false;
  cost = 0;
  otpValue: any;
  edata1: any;
  private _window: ICustomWindow;
  public rzp: any;
  public options: any = {
    key: 'rzp_test_ZXUPgJXW1QHczX',
    name: 'SpiceRiders',
    description: 'Shopping',
    image: "https://spiceriders619.web.app/assets/images/logo.svg",
    amount: 1, // razorpay takes amount in paisa
    prefill: {
      name: 'SpiceRiders',
      email: '', // add your email id
    },
    notes: {},
    theme: {
      color: '#FE5534'
    },
    handler: this.paymentHandler.bind(this),
    modal: {
      ondismiss: (() => {
        this.zone.run(() => {

          alert("payment failed")
          // add current page routing if payment fails
        })
      })
    }
  };

  constructor(private zone: NgZone, private winRef: WindowRefService, private http: HttpClient, private request: RequestService, private router: Router, private notifyService: NotificationService) {


    this.group = new FormGroup({
      Country: new FormControl('', Validators.required),
      Zone: new FormControl('', Validators.required),
      Lom: new FormControl('', Validators.required),
      tabletype: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      tablename: new FormControl('', Validators.required),
      total: new FormControl('', Validators.required),
      otp: new FormControl(''),
    });

  }

  loadcountry() {
    this.http.get("https://admin.jcombiz.com/jcom/get_zone.php").subscribe(
      (response: any) => {
        this.Countrys = response[0].country_name;
        console.log(this.Countrys);
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
        console.log(this.Zones);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadlom(zone: any) {
    this.http.get("https://admin.jcombiz.com/jcom/get_lom.php?zone=" + zone).subscribe(
      (response: any) => {
        this.Loms = response;
        console.log(this.Loms);
      },
      error => {
        console.log(error);
      }
    );
  }

  initPay(): void {
    this.rzp = new this.winRef.nativeWindow['Razorpay'](this.options);
    this.rzp.open();
  }
  paymentHandler(res: any) {
    debugger
    alert(JSON.stringify(res))
    this.paymentSuccess();
  }

  ngOnInit(): void {
    this.loadZones();
    this.loadcountry();
  }
  get f() {
    return this.group.controls;
  }
  Submit() {
    // if (this.group.invalid) {
    //   return;
    // }

    debugger
    if (!this.isOTP) {
      this.request.requestOTP(this.group.get("mobile").value).subscribe((res: any) => {
        if (res.length > 0) {
          this.otpValue = res[0].otp;
          this.options.amount = res[0].registration_cost * 100;
          this.isOTP = true;
        }
      })
    }
    else {

      if (this.otpValue == this.group.get("otp").value) {
        this.initPay();
      }
      else {
        alert("invalid OTP")
      }
    }
    event.preventDefault();
  }

  paymentSuccess() {
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
    this.request.addtable1(this.edata1).subscribe(
      (res: any) => {
        console.log("sucess", "" + res[0].status)
        if (res[0].status == "Your Request Submitted Successfully!!NHQ Will Reach you Shortly.") {
          console.log("sucess", "" + res.status)
          this.notifyService.showSuccess("Your Request Submitted Successfully!!NHQ Will Reach you Shortly", "");
          this.router.navigate(['']);
        } else if (res[0].status == "error") {
          this.notifyService.showError("Something is wrong", "")
        }
      },
      error => {
        console.log("error", "" + error)
      }
    );
  }
}
