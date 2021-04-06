import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  currentPageUrl: string = "news";

  tabs = [
    {name: "Aktuelles", url: "news"},
    {name: "Veranstaltungen", url: "events"},
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.chooseRandomTab();
  }

  /**
   * After page load choose a random tab
   */
  chooseRandomTab() {
    let url = this.tabs[Math.floor(Math.random() * this.tabs.length)].url;
    this.navToTab(url);
  }

  /**
   * Navigate to a specific tabs component based on url
   * @param url
   */
  navToTab(url: string) {
    this.currentPageUrl = url;
    this.router.navigate(['tabs/', url]);
  }
}
