import { Question } from './question.model';
import { QuestionService } from './question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: Question[]
  constructor(private service:QuestionService) { }

  ngOnInit() {
    this.service.getQuestions()
      .subscribe(questions =>  this.questions = questions );
  }

}
