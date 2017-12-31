import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  name: string;
  age: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  coureses: any[];

  constructor(private db: AngularFireDatabase, private httpclient: HttpClient) {
    db.list('/tean_info').valueChanges().subscribe(coureses => {
      this.coureses = coureses;
      console.log(coureses);
    });

    httpclient.get<UserResponse>('https://api.myjson.com/bins/sasob').subscribe(data => {
      console.log(data.name);
    }, err => {
      console.log(err);
    });
  }

}
