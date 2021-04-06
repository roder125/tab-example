import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News, NewsService } from '../shared/services/news/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  news: News = <News>{};

  constructor(
    private activeRoute: ActivatedRoute,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.getNewsById(params.id);
    });
  }

  /**
   * get the news by it's id
   * @param id
   */
  getNewsById(id: string) {
    this.newsService.getNewsData().subscribe((newsArray: News[]) => {
      if(newsArray) {
        this.news = newsArray.find(e => +e.id === +id);
      }
    });
  }
}
