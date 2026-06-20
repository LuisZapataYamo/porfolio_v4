/**
 * Portfolio HTTP Client
 * Cliente HTTP centralizado para llamadas al servidor
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioHttpClient {
  private baseUrl = '/api';

  constructor(private httpClient: HttpClient) {}

  /**
   * Realiza una petición GET genérica
   */
  get<T>(endpoint: string, params?: { [key: string]: any }): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(key => {
        httpParams = httpParams.set(key, params[key]);
      });
    }
    return this.httpClient.get<T>(`${this.baseUrl}${endpoint}`, { params: httpParams });
  }

  /**
   * Realiza una petición POST genérica
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}${endpoint}`, body);
  }

  /**
   * Realiza una petición PUT genérica
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}${endpoint}`, body);
  }

  /**
   * Realiza una petición DELETE genérica
   */
  delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>(`${this.baseUrl}${endpoint}`);
  }
}
