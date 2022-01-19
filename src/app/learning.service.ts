import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LearningService {
  public baseURL = "http://103.133.214.197/LearningandDevelopment/";
  public host = "https://digioffice.amazeone.co/digiofficeapi";
  url:any;
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
    let APIURL = this.baseURL + "Master/UploadImages/";
    return this.http.post(APIURL, formdata);
  }
  public GetRoleType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetRoleType?UserTypeID=" + 1
    );
  }

  public GetMyDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetMyDetails"
    );
  }
  public GetPositionDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetPositionDetails"
    );
  }
  public GetMyAddressDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetMyAddressDetails"
    );
  }
  public GetDependentDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetDependentDetails"
    );
  }

  public GetNomination() {
    return this.http.get<any[]>(
      this.host + "/Master/GetNomination"
    );
  }
  public GetEmploymentDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmploymentDetails"
    );
  }
  public GetEducationDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEducationDetails"
    );
  }
  public GetBankDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetBankDetails"
    );
  }

  public GetID_Details() {
    return this.http.get<any[]>(
      this.host + "/Master/GetID_Details"
    );
  }

  
  public GetVisaDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetVisaDetails"
    );
  }

  public GetSalaryDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetSalaryDetails"
    );
  }

  public InsertMyDetails(data: any) {
    debugger;
    this.url = this.host + '/Building/InsertBuildingStaff';
    return this.http.post(this.url, data);
  }

  public UpdateStaff(data: any) {
    debugger;
    this.url = this.host + '/Building/UpdateBuildingStaff';
    return this.http.post(this.url, data);
  }

  public InsertDependentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertDependentDetails';
    return this.http.post(this.url, data);
  }
  public InsertNomination(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertNomination';
    return this.http.post(this.url, data);
  }

  public InsertMyAddressDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertMyAddressDetails';
    return this.http.post(this.url, data);
  }

  public InsertEmploymentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertEmploymentDetails';
    return this.http.post(this.url, data);
  }

  public InsertEducationDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertEducationDetails';
    return this.http.post(this.url, data);
  }

  public InsertID_Details(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertID_Details';
    return this.http.post(this.url, data);
  }

  public InsertBankDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertBankDetails';
    return this.http.post(this.url, data);
  }


  public InsertVisaDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertVisaDetails';
    return this.http.post(this.url, data);
  }

  public InsertSalaryDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertSalaryDetails';
    return this.http.post(this.url, data);
  }


  public InsertPositionDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertPositionDetails';
    return this.http.post(this.url, data);
  }

  
  public UpdatePositionDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdatePositionDetails';
    return this.http.post(this.url, data);
  }

  public UpdateEmploymentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateEmploymentDetails';
    return this.http.post(this.url, data);
  }


  public UpdateEducationDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateEducationDetails';
    return this.http.post(this.url, data);
  }


  public UpdateMyDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateMyDetails';
    return this.http.post(this.url, data);
  }


  public UpdateSalaryDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateSalaryDetails';
    return this.http.post(this.url, data);
  }


  public UpdateBankDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateBankDetails';
    return this.http.post(this.url, data);
  }


  public UpdateVisaDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateVisaDetails';
    return this.http.post(this.url, data);
  }


  public UpdateID_Details(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateID_Details';
    return this.http.post(this.url, data);
  }


  public UpdateNomination(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateNomination';
    return this.http.post(this.url, data);
  }

  public UpdateDependentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateDependentDetails';
    return this.http.post(this.url, data);
  }

  public UpdateMyAddressDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateMyAddressDetails';
    return this.http.post(this.url, data);
  }

  public GetAttendance() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetAttendance?UserID=1&SDate=01-01-2020&EDate=01-01-2020"
    );
  }

  public InsertAttendanceWeb(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/InsertAttendanceWeb';
    return this.http.post(this.url, data);
  }

  public UpdateAttendanceWeb(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/UpdateAttendanceWeb';
    return this.http.post(this.url, data);
  }

  public GetCourse() {
    debugger;
    return this.http.get<any[]>(
      this.baseURL + '/Master/GetCourse');
  }
  public InsertCourse(data: any) {
    debugger;
    this.url =  this.baseURL + '/Master/InsertCourse';
    return this.http.post(this.url, data);
  }

  public UpdateCourse(data: any) {
    debugger;
    this.url =  this.baseURL + '/Master/UpdateCourse';
    return this.http.post(this.url, data);
  }

  public DeleteCourse(ID: any) {
    return this.http.get<any[]>(
      this.baseURL + "/Master/DeleteCourse?ID=" + ID);
  }

  public GetCategoryMaster() {
    debugger;
    return this.http.get<any[]>(
      this.baseURL + '/Master/GetCategoryMaster');
  }

  public GetQuestionMaster() {
    debugger
    let APIURL = this.baseURL + "Master/GetQuestionMaster";
    return this.http.get<any[]>(APIURL);
  }

  public GetTrainer() {
    debugger
    let APIURL = this.baseURL + "Master/GetTrainer";
    return this.http.get<any[]>(APIURL);
  }

  public InsertTrainer(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertTrainer";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateTrainer(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateTrainer";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeleteTrainer(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteTrainer?ID="+id;
    return this.http.get<any[]>(APIURL);
  }
  public GetAssessments() {
    debugger;
    return this.http.get<any[]>(
      this.baseURL + '/Master/GetAssessments');
  }

  public InsertChapterAttachment(data: any) {
    debugger;
    this.url =  this.baseURL + '/Master/InsertChapterAttachment';
    return this.http.post(this.url, data);
  }

  public InsertChapter(data: any) {
    debugger;
    this.url =  this.baseURL + '/Master/InsertChapter';
    return this.http.post(this.url, data);
  }


  public GetChapterAttachmentByChapterID(chapterid:any) {

    return this.http.get<any[]>(this.host + "/Master/GetChapterAttachmentByChapterID?ChapterID="+chapterid);
  }

  public GetChapter() {

    return this.http.get<any[]>(this.host + "/Master/GetChapter");
  }
  
  

  
}
