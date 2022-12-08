import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  sharedData: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.sharedData$
      .subscribe(sharedData => this.sharedData = sharedData);
  }

}