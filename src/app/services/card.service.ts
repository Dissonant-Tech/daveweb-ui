import { Injectable } from '@angular/core';
import { Card } from '../components/card/card';
import {
  Resource,
  ResourceParams,
  ResourceCRUD,
  ResourceModel,
  ResourceHandler,
  ResourceAction,
  ResourceRequestMethod,
  IResourceMethodStrict,
  IResourceMethod,
  IResourceActionInner
} from '@ngx-resource/core';


@Injectable()
@ResourceParams({
  // IResourceParams
  pathPrefix: '/blog/cards',
  removeTrailingSlash: false
})
export class CardResource extends Resource {

  @ResourceAction({
    path: '/{!id}'
  })
  get: IResourceMethod<{id: string}, Card>; // will call /user/id

  @ResourceAction({
    path: '/'
  })
  getAll: IResourceMethod<{}, [Card]>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }

}

@Injectable()
export class CardService {

  private card: Card = null;

  constructor(private cardResource: CardResource) {}

  get(id: string): Promise<any> {
    return this.cardResource.get({id});
  }

  getAll(): Promise<any> {
    return this.cardResource.getAll();
  }

}
