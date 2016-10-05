import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: Number[];
  constructor(private hackernewsApiService: HackernewsApiService) {
  }

  ngOnInit() {
    this.hackernewsApiService.fetchStories()
    .subscribe(
      stories => this.items = stories,
      error => console.log(error));
  }

}
