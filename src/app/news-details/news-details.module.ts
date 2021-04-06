import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDetailsRoutingModule } from './news-details-routing.module';
import { NewsDetailsComponent } from './news-details.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsViewComponent } from './components/news-view/news-view.component';


@NgModule({
  declarations: [NewsDetailsComponent, HeaderComponent, NewsViewComponent],
  imports: [
    CommonModule,
    NewsDetailsRoutingModule
  ]
})
export class NewsDetailsModule { }
