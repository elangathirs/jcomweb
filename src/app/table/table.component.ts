import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // Zones: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  // Loms: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com'];
  tabletypes: any = ['LiveTable', 'Virtual Table', 'Association', 'Virtual international'];
  Zones: any;
  Countrys: any;
  tables:any;
  tablevalue:any;
  registrationForm:FormGroup;
  memebers: any;
  isShowDiv = false;
  Customers:any;
  columns = [
    { name: 'member_name' },
    { name: 'business_category'},
  ];
  constructor(private http: HttpClient,public fb: FormBuilder) {

    this.registrationForm = this.fb.group({
     Country: new FormControl(''),
     Zone: new FormControl('', Validators.required),
     table: new FormControl('', Validators.required)
   });
   
  }



  onAddSubmit() {
  this.tablevalue=this.registrationForm.get('table').value;


  this.http.get("https://admin.jcombiz.com/jcom/get_table_info.php?table="+this.tablevalue).subscribe(
    (response: any) => {
      this.memebers = response[0];
  console.log("memebers",this.memebers);
  this.Customers=response[0].members;
  this.isShowDiv = !this.isShowDiv;
    },
    error => {
      console.log(error);
    }
  );
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
   this.http.get("https://admin.jcombiz.com/jcom/get_tables.php?zone="+zone).subscribe(
     (response: any) => {
       this.tables = response;
     },
     error => {
       console.log(error);
     }
   );
 }

 ngOnInit(): void {
  this.loadcountry();
   this.loadZones();
  
 }
 get f(){
   return this.registrationForm.controls;
 }
 
}
