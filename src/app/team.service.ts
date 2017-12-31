import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';


@Injectable()
export class TeamService {

  constructor(private httpclient: HttpClient) {
  }

  getTeam(): Observable<User[]> {
    return this.httpclient.get<User[]>('https://api.myjson.com/bins/axd8r');
  }

}
