import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Products} from './model/products';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:3000/product';

  public geProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseUrl);
  }

  public getProductId(id: string): Observable<Products> {
    return this.http.get<Products>(this.baseUrl + '/' + id);
  }

  public addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(this.baseUrl, product);
  }

  public deleteProduct(product: Products): Observable<Products> {
    return this.http.delete<Products>(this.baseUrl + '/' + product.id);
  }

  public editProduct(product: Products): Observable<Products> {
    return this.http.put<Products>(this.baseUrl + '/' + product.id, product);
  }

  searchProduct(term: string): Observable<Products[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    } return this.http.get<Products[]>(`${this.baseUrl}/?name=${term}`);

  }
}
