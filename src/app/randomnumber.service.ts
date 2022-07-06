import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResultHttp } from './IResultHttp';
import { INumbers } from './INumbers';

@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
  constructor(private http: HttpClient) {}

  async getRandomNumber(): Promise<IResultHttp<INumbers> | undefined> {
    const url = `https://www.randomnumberapi.com/api/v1.0/random?min=1&max=1000`;
    return await this.http.get<IResultHttp<INumbers>>(url).toPromise();
  }
}
