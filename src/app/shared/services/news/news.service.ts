import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface News {
  id: string,
  title: string,
  body: string,
  img: string,
  date: Date
}

const NEWS_CACHE_KEY = "tabsExampleNewsCache";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsSubject$ = new BehaviorSubject<any>([]);
  private news_: Observable<any>;
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.fetchNewsDataFromApi();
  }

  /**
   * Gets news data from a news api
   */
  fetchNewsDataFromApi(): void {
    this.news_ = this.http.get(this.apiUrl + 'posts');

    this.news_.subscribe((res: any[]) => {
      if (res) {
        res = res.slice(0, 10);
        res = res.map(news => {
          news.img = this.getRandomImage();
          news.date = this.getRandomDate();
          return news;
        });
        this.newsSubject$.next(res);
      }
    });
  }

  getNewsData(): Observable<News[]> {
    return this.newsSubject$.asObservable();
  }

  /**
   * retunr random image url
   * @returns
   */
  getRandomImage(): string {
    return "https://source.unsplash.com/random/400x300";
  }

  /**
   * Return a random date for testing
   * @returns
   */
  getRandomDate(): Date {
    return new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }
}
