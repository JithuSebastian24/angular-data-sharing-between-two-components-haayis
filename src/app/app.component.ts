import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { FirstComponent } from './first/first.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  nameObject = {
    name: 'Angular'
  };

  @ViewChild(FirstComponent) component: FirstComponent;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users', { observe: 'response' })
      // .pipe(
      //   map((users: any[]) => users.map(user => user.name)),
      //   map((users: string[]) => users.map(user => user.replace(' ', '')))
      // )
      .subscribe(res => {
        console.log(res);
      });

      console.log(component);
  }

  onNameChange(changedName) {
    this.name = changedName;
  }
}
