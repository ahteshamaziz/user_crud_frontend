import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
      private backend:BackendService,
      private router: Router,
      private _route : ActivatedRoute) { }
   

     data:any;
     First_name:string;
     Last_name:string;
     Email:string;
     Phone_number:number;


     id:any;


  ngOnInit(): void {
   
    this.id = this._route.snapshot.params.id; 
        
    (<HTMLInputElement>document.getElementById("initial")).style.display = "none"; 

    this.backend.findOne(this.id)
    .subscribe
    (
      data=>
      { 
       
        this.data = data;
        console.log(data)

        this.First_name = this.data[0].First_name
        this.Last_name = this.data[0].Last_name
        this.Email = this.data[0].Email
        this.Phone_number = this.data[0].Phone_number


      });


  }


  editdata(){
    if((this.First_name == "")||(this.Last_name == "")||(this.Phone_number == undefined)||(this.Email == "")){
          alert("fill all data");
    }else{
      var data = {
        First_name : this.First_name,
        Last_name : this.Last_name,
        Email : this.Email,
        Phone_number : this.Phone_number,
        id: this.id
      }


      this.backend.updatebyid(data)
    .subscribe
    (
      data=>
      { 
        console.log(data);
  this.router.navigate(['welcome/home']);

    });
}






}


}






 
 

  

   
   

    


