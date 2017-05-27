import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

    constructor(meta: Meta, title: Title) {

      title.setTitle('My About Page');

      meta.updateTag({ name: 'author',      content: 'Quentin Monmert 2'});
      meta.updateTag({ name: 'keywords',    content: 'angular seo, angular 4 universal, about page'});
      meta.updateTag({ name: 'description', content: 'This is my about page'});
  
    }

}
