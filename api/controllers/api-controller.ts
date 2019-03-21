import { Controller } from "tsoa";

export class API extends Controller {
  protected _repository: any;

  constructor(repository: any) {
    super();
    this._repository = repository;
  }
}