import { Component, OnInit , Input } from '@angular/core';
import {DataservicesService} from '../../services/dataservices.service';
import {Question} from '../../model/question.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

   @Input('question') question:Question

  constructor( public dataService:DataservicesService ) { }

  ngOnInit() {
  }

  removeQuestion(question){
    this.dataService.removeQuestion(question);
  }

}
