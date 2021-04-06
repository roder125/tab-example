import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit(): void {
    console.log(this.news)
  }

}
