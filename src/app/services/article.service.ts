import { Injectable } from '@angular/core';
import {
  Rest,
  RestParams,
  RestCRUD,
  RestModel,
  RestHandler,
  RestAction,
  RestRequestMethod,
  IRestMethodStrict,
  IRestMethod,
  IRestActionInner
} from 'rest-core';


@Injectable()
@RestParams({
  // IRestParams
  pathPrefix: '/blog/articles'
})
export class ArticleRest extends Rest {

  @RestAction({
    path: '/{!id}'
  })
  get: IRestMethod<{id: string}, {}>; // will call /user/id

  @RestAction({
    path: '/'
  })
  getAll: IRestMethod<{}, [{}]>;

  constructor(restHandler: RestHandler) {
    super(restHandler);
  }

}

@Injectable()
export class ArticleService {

  private article: {} = null;

  constructor(private articleRest: ArticleRest) {}

  get(id: string): Promise<any> {
    return this.articleRest.get({id});
  }

  getAll(): Promise<any> {
    return this.articleRest.getAll();
  }

}
