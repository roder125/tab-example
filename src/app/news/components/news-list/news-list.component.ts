import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News, NewsService } from 'src/app/shared/services/news/news.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  private newsSub: any;
  news: News[] = [];


  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsSub = this.newsService.getNewsData().subscribe(res => {
      if(res) {
        this.news = res;
      }
    }, error => {
      // Hnadle error
    });
  }

  /**
   * Unsub from subscriptions
   */
  ngOnDestroy(): void {
    this.newsSub.unsubscribe();
  }

  openNewsDetails(id: string) {
    this.router.navigate(['news-details/', id]);
  }
}
