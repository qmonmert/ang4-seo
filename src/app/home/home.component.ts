import { Component } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(meta: Meta, title: Title) {

    title.setTitle('My Home Page');

    meta.updateTag({ name: 'author',      content: 'Quentin Monmert'});
    meta.updateTag({ name: 'keywords',    content: 'angular seo, angular 4 universal'});
    meta.updateTag({ name: 'description', content: 'This is my Angular SEO-based App'});

  }

}
