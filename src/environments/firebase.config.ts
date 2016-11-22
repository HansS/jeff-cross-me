
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyCJ5HadViw-l5ao8o5TvqByOhHQ99UIRps",
    authDomain: "fe-questions.firebaseapp.com",
    databaseURL: "https://fe-questions.firebaseio.com",
    storageBucket: "fe-questions.appspot.com",
    messagingSenderId: "833710496572"
  };





export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
