import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../../services/article.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  private article = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArticleService
  ) {}

  ngOnInit() {
  }

}
