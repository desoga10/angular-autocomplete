import { Component, OnInit } from '@angular/core';
import { AutoService } from './auto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-auto-complete';
  posts!: any;
  username: any;
  constructor(private service: AutoService) {}

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.service.getData().subscribe((res: any) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  nameValue(name: any) {
    this.username = name;
    console.log(this.username);
  }
}
