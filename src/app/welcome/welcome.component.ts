import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private backend:BackendService,
    private router: Router,
    private _route : ActivatedRoute) { }
 



 open(){
   
  
  (<HTMLInputElement>document.getElementById("initial")).style.display = "none"; 


  this.router.navigate(['welcome/home']);
 }

  ngOnInit(): void {
    
  }



}














 
 

  

   
   

    


