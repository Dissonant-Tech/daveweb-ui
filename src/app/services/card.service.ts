import { Injectable } from '@angular/core';
import { Card } from '../components/card/card';
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
  pathPrefix: '/cards'
})
export class CardRest extends Rest {

  @RestAction({
    path: '/{!id}'
  })
  get: IRestMethod<{id: string}, Card>; // will call /user/id

  @RestAction({
    path: '/'
  })
  getAll: IRestMethod<{}, [Card]>;

  constructor(restHandler: RestHandler) {
    super(restHandler);
  }

}

@Injectable()
export class CardService {

  private card: Card = null;

  constructor(private cardRest: CardRest) {}

  get(id: string): Promise<any> {
    return this.cardRest.get({id});
  }

  getAll(): Promise<any> {
    return this.cardRest.getAll();
  }

}
