import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LearningService {
  public baseURL = "http://103.133.214.197/LearningandDevelopment/";
  public host = "https://digioffice.amazeone.co/digiofficeapi";
  constructor(private http: HttpClient) { }

  public GetLoginTypeMaster() {

    return this.http.get<any[]>(this.host + "/Vendor/GetLoginTypeMaster");
  }
  public GetRecruiterStaff() {

    return this.http.get<any[]>(this.host + "/User/GetRecruiterStaff");
  }
  public AttachmentsUpload(files: any) {
    debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    debugger
    let APIURL = this.host + "Master/UploadImages/";
    return this.http.post(APIURL, formdata);

  }


}
