
import { Observable } from 'rxjs';
import { QuestionService } from './../question/question.service';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';
import {Question} from '../question/question.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions: Question[];
  constructor(private service:QuestionService) { }

  ngOnInit() {
    this.service.getQuestions()
      .do(console.log)
      .subscribe( questions => this.questions = questions);
  }

}
