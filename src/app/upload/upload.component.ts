







import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const URL1 = 'http://54.243.18.152:8000/createUser';
// 54.243.18.152

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
      private backend:BackendService,
      private router: Router,
      private _route : ActivatedRoute) { }
   
    public uploader1: FileUploader = new FileUploader({url: URL1, itemAlias: 'image'});

     data:any;
     First_name:string;
     Last_name:string;
     Email:string;
     Phone_number:number;


     public imagePath;
     imgURL: any;
     public message: string;
    
     preview(files) {
       if (files.length === 0)
         return;
    
       var mimeType = files[0].type;
       if (mimeType.match(/image\/*/) == null) {
         this.message = "Only images are supported.";
         return;
       }
    
       var reader = new FileReader();
       this.imagePath = files;
       reader.readAsDataURL(files[0]); 
       reader.onload = (_event) => { 
         this.imgURL = reader.result; 
       }
     }
     

  ngOnInit(): void {
   
        
    (<HTMLInputElement>document.getElementById("initial")).style.display = "none"; 


    this.uploader1.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader1.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //console.log('json:uploaded:', item, status, response);
        alert('uploaded successfully');
       this.router.navigate(['welcome/home']);

     };

  }

  addimage(){
    //alert(this.mapcid);
         if((this.First_name == "") || (this.Last_name == "") || (this.Phone_number == undefined) || (this.Email == "" )){
           alert("Please fill data");
         }else{
          var First_name = this.First_name;
          var Last_name = this.Last_name;
          var Phone_number = this.Phone_number;
          var Email = this.Email;

          this.uploader1.onBuildItemForm = (fileItem: any, form: any) => {
           form.append('First_name',  First_name);
           form.append('Last_name',  Last_name);
           form.append('Phone_number',  Phone_number);
           form.append('Email',  Email);
         }
         this.uploader1.uploadAll();
        }
         
   }

   

   

}









 
 

  

   
   

    


