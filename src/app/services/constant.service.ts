import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  // local
  public baseImageURL: string = "http://localhost:8080/ministock_restapi/public/images/";
  public baseURLAPI: string = "http://localhost:8080/ministock_restapi/public/api/";

  // production
  // public baseUrl: string = "https://www.thaismartjob.com/assets/backend/images/user_avatar/";
  // public baseUrlApi: string = "https://www.thaismartjob.com/api/v1/client/";

  public authKey: string = "Basic c2FtaXQ6c21rMzc3MDQw";
  public contentType: string = "application/json;charset=UTF-8";
  public msgStatusCodeAPI_0 = "Error status Code:0 Web API Offline";

  constructor() { }
}
