import { Component, OnDestroy, OnInit } from '@angular/core';
import { News, NewsService } from '../shared/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
}
