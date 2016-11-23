import { Question } from './../question/question.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: Question[]
  constructor() { }

  ngOnInit() {
  }

}
