import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
function _window() :any{
  return window
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  get nativeWindow():any{
    return _window();
  }
  constructor(private http: HttpClient) { }

  url: string;
  endPoint = 'https://admin.jcombiz.com/jcom';



//country
public getdata() {
  this.url = `${this.endPoint}/get_home_info.php`;
  return this.http.get(this.url);
}
public addtable(newexam: {name:any;mobile_no:any;email_id:any;password:any;country:any;zone:any;lom:any;membership_id:any;table:any;business_category:any;meeting_type:any;payment_id:any;}) {
  this.url = `${this.endPoint}/get_signup.php
  ?name=`+newexam.name+'&mobile_no='+newexam.mobile_no+'&email_id='+newexam.email_id+'&password='+newexam.password+'&country='+newexam.country+'&zone='+newexam.zone+'&lom='+newexam.lom+'&membership_id='+newexam.membership_id+'&table='+newexam.table+'&business_category='+newexam.business_category+'&meeting_type='+newexam.meeting_type+'&payment_id='+newexam.payment_id;
  console.log("url",this.url)
  return this.http.get(this.url);
}
public addtable1(newexam: {full_name:any;mobile_no:any;email_id:any;country:any;zone:any;lom:any;city:any;table_name:any;table_type:any;total_members;}) {
  this.url = `${this.endPoint}/send_start_table.php?full_name=`+newexam.full_name+'&mobile_no='+newexam.mobile_no+'&email_id='+newexam.email_id+'&country='+newexam.country+'&zone='+newexam.zone+'&lom='+newexam.lom+'&city='+newexam.city+'&table_name='+newexam.table_name+'&table_type='+newexam.table_type+'&total_members='+newexam.total_members;
  console.log("url",this.url)
  return this.http.get(this.url);
}

}
