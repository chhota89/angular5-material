import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { TeamService } from './team.service';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  iplTeam: any[];
  users: User[];
  constructor(private db: AngularFireDatabase, private teamService: TeamService) {
    db.list('/tean_info').valueChanges().subscribe(coureses => {
      this.iplTeam = coureses;
    });
  }

  ngOnInit(){
    this.teamService.getTeam().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
