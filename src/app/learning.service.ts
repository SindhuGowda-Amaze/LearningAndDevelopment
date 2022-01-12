import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LearningService {
  host = "https://23.101.22.93/DigiOfficeBSINTAPI";
  constructor(private http: HttpClient) { }

  public GetLoginTypeMaster() {

    return this.http.get<any[]>(this.host + "/Vendor/GetLoginTypeMaster");
  }
  public GetRecruiterStaff() {

    return this.http.get<any[]>(this.host + "/User/GetRecruiterStaff");
  }


}
