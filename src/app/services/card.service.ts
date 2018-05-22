import { Injectable } from '@angular/core';
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
  get: IResourceMethod<{id: string}, any>; // will call /user/id

  @ResourceAction({
    path: '/'
  })
  getAll: IResourceMethod<{}, [any]>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }

}

@Injectable()
export class CardService {

  private cards: any = null;

  constructor(private cardResource: CardResource) {}

  get(id: string): Promise<any> {
    return this.cardResource.get({id});
  }

  getAll(): Promise<any> {
    if (!this.cards) {
      this.cards = this.cardResource.getAll();
    }
    return this.cards;
  }
}
