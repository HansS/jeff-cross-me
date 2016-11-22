import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable()
export class QuestionService {

  constructor(private fire: AngularFire) {

  }
  getQuestions(): FirebaseListObservable<Question[]> {
    return this.fire.database.list('questions');
  };
}

