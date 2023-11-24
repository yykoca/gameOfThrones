import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl = "https://api.gameofthronesquotes.xyz/v1/";

  constructor(private httpClient: HttpClient) { }

  public getData(data: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + data);
  }
}
