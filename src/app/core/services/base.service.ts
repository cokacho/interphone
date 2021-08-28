import { Injectable } from '@angular/core';
import {Pagination} from "../models/common.model";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

  public makeParams(params: Pagination) {
    let queryParams = new HttpParams();
    if (params?.query) {
      queryParams = queryParams.set(params.query?.toString(), 'query');
    }
    if (params?.page) {
      queryParams = queryParams.set(params.page?.toString(), 'page');
    }
    if (params?.sort) {
      queryParams = queryParams.set(params.sort?.toString(), 'sort');
    }
    if (params?.limit) {
      queryParams = queryParams.set(params.limit?.toString(), 'limit');
    }

    return queryParams;
  }
}
