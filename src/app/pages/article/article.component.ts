import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({
          transform: 'translateY(10%)',
          opacity: 0
        }),
        animate(450)
      ])
    ])
  ]
})
export class ArticleComponent implements OnInit {

  private id: number;
  private sub: any;
  public article: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ArticleService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.service.get(this.id.toString()).then((resp) => {
        this.article = resp;
      });
    });
  }
}
