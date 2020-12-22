import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private apiURl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {

  }

  fetchMyURLS() {
    return this.httpClient.get(this.apiURl + '/u/getAllUsers');
  }

  createURL(payload) {
    return this.httpClient.post(this.apiURl + '/u/createUrl', payload);
  }
}
