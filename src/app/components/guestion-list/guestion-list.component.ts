import { Component, OnInit } from '@angular/core';
import { DataservicesService } from '../../services/dataservices.service';
import {Question} from '../../model/question.service'



@Component({
  selector: 'app-guestion-list',
  templateUrl: './guestion-list.component.html',
  styleUrls: ['./guestion-list.component.css']
})
export class GuestionListComponent implements OnInit {
 
    questions:Question[];
    
 
  constructor( public dataService:DataservicesService) {

 }

    ngOnInit() {
    this.questions = this.dataService.getQuestion();
     }

     addQuestion(question:Question){
       
       this.dataService.addQuestion(question);


     } 

 
       }


