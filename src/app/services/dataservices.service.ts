import { Injectable } from '@angular/core';
import {Question} from '../model/question.service';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

   questions : Question[];

  constructor() { 
/*
      this.questions = [
      {
        text:'What is your name',
        answer: 'My name is Brad',
        hide: false
      },
      {
        text:'What is your favorite color?',
        answer: 'My favorite color is red',
         hide: true
      },
      {
        text:'What is your favorite language',
        answer: 'My favorite language is JavaScript',
        hide: true
      }
    ]

*/
  };

  // Get Questions from LS

  getQuestion(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // Add Question to LS

   addQuestion(question:Question) {
    this.questions.unshift(question);

     // Init local var
    let questions;

    if(localStorage.getItem('questions') === null){
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add new question
      questions.unshift(question);
      // Re set LS
      localStorage.setItem('questions', JSON.stringify(questions));
    }

   }

// Remove Question from LS
  removeQuestion(question:Question){
    for(let i = 0;i < this.questions.length;i++){
      if(question == this.questions[i]){
        this.questions.splice(i, 1);
       localStorage.setItem('questions', JSON.stringify(this.questions)); 
      }
    }
  }

}
