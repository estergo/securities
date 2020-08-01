import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = '/api/stocks';

@Injectable({
  providedIn: 'root'
})
export class SecuritiesService {

  constructor(private http: HttpClient) {
  }

  getSecuritiesList(query: string): Observable<any> {
    const params = { query };
    return this.http.get(baseUrl, { params });
  }

  getSecuritiesData(symbols: string[], updateId: Number): Observable<any> {
    const params = { symbols: symbols.join(), updateId: updateId.toString() }
    return this.http.get(baseUrl, { params });
  }
}
