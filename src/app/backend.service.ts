

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  
  @Injectable({
    providedIn: 'root'
  })
  
  export class BackendService {
  
    constructor(private httpClient : HttpClient,
      ) { }
  
      //  54.243.18.152
      api = "http://54.243.18.152:8000/";
  
  
         updatebyid(data:any): Observable<any>{
            return this.httpClient.post(this.api+'updatebyid', data);
          }  
      
          getUser(){
            return this.httpClient.get(this.api+'getUser');
          }
       
          findOne(data){
          return this.httpClient.get(this.api+'findOne?id='+data);
        }

        find(){
          return this.httpClient.get(this.api+'find');
        }

        delete(data){
          return this.httpClient.get(this.api+'delete?id='+data);
        }
    
  }