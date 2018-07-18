import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import {Question} from '../../model/question.service';

@Component({
  selector: 'app-add-qustion',
  templateUrl: './add-qustion.component.html',
  styleUrls: ['./add-qustion.component.css']
})
export class AddQustionComponent implements OnInit {
    @Output() questionAdded = new EventEmitter<Question>();
    text: string;
    answer: string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
     this.questionAdded.emit({text:this.text, answer:this.answer , hide:true })  

  }

}
