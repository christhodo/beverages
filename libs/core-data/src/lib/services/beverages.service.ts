import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beverage } from '@beverages/api-interfaces';
import {
  BeverageEnvironment,
  BEVERAGE_ENVIRONMENT,
} from '@beverages/environment';

@Injectable({
  providedIn: 'root',
})
export class BeveragesService {
  model = 'beverages';

  constructor(
    private httpClient: HttpClient,
    @Inject(BEVERAGE_ENVIRONMENT) private environment: BeverageEnvironment
  ) {}

  all() {
    return this.httpClient.get<Beverage[]>(this.getUrl());
  }

  find(beverageId: string) {
    return this.httpClient.get<Beverage>(this.getUrlById(beverageId));
  }

  create(beverages: Beverage) {
    return this.httpClient.post<Beverage>(this.getUrl(), beverages);
  }

  update(beverages: Beverage) {
    return this.httpClient.patch<Beverage>(
      this.getUrlById(beverages.id),
      beverages
    );
  }

  delete({ id }: Beverage) {
    return this.httpClient.delete<Beverage>(this.getUrlById(id));
  }

  private getUrl() {
    return `${this.environment.apiUrl}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}
