import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private backend:BackendService,
      private router: Router,
      private _route : ActivatedRoute) { }
   

      data:any;
     

  ngOnInit(): void {
   
  (<HTMLInputElement>document.getElementById("initial")).style.display = "none"; 
        
        this.getuser();

  }

  getuser(){
    this.backend.getUser()
        .subscribe
        (
          data=>
          { 
            this.data = data;
            console.log(data);
          })
  }

  edit(x){
  this.router.navigate(['welcome/edit',x]);
  }

  del(x){
    this.backend.delete(x)
    .subscribe((da)=> { 
      console.log(da);
      this.getuser();

    })

}


upload(){
  this.router.navigate(['welcome/upload']);
}
 

   

   

}









 
 

  

   
   

    


