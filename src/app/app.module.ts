

// angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

// rxjs operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


// app components
import { firebaseConfig } from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuestionService } from './question/question.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionDetailComponent,
    QuestionListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
