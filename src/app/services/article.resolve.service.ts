import { Injectable } from '@angular/core';
import {
    Router,
    Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { ArticleService } from './article.service';

@Injectable()
export class ArticleResolver implements Resolve<any> {

    constructor(
      private articleService: ArticleService,
      private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot): Promise<any> | boolean {
        const id = +route.params['id'];
        return this.articleService.get(id.toString()).then(article => {
            if (article) {
                return article;
            } else { // id not found
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}
