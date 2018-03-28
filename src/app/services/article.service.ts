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
  pathPrefix: '/blog/articles'
})
export class ArticleResource extends Resource {

  @ResourceAction({
    path: '/{!id}'
  })
  get: IResourceMethod<{id: string}, {}>; // will call /user/id

  @ResourceAction({
    path: '/'
  })
  getAll: IResourceMethod<{}, [{}]>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }

}

@Injectable()
export class ArticleService {

  constructor(private articleResource: ArticleResource) {}

  get(id: string): Promise<any> {
    return this.articleResource.get({id});
  }

  getAll(): Promise<any> {
    return this.articleResource.getAll();
  }

}
