import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: Number[];
  constructor() { 
    this.items = new Array(30).map((x, i) => i);
  }

  ngOnInit() {
  }

}
