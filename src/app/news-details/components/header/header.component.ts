import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {

  }

  /**
   * Nav back to news page
   */
  navBack() {
    this.router.navigate(['tabs/news']);
  }

}
