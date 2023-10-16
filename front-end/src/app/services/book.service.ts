import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Books, Book } from './bookInterface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Books> {
    const url = `${environment.baseurl}/`
    return this.httpClient.get<Books>(url);
  }

  getBookById(id:any): Observable<Book[]> {
    const url = `${environment.baseurl}/${id}`
    return this.httpClient.get<Book[]>(url);
  }

  updateBook(payload:Book): Observable<any> {
    const url = `${environment.baseurl}/edit`
    return this.httpClient.put<any>(url, payload);
  }

  createBook(payload:Book): Observable<any> {
    const url = `${environment.baseurl}/add`
    return this.httpClient.post<any>(url, payload);
  }

  deleteBook(id:string): Observable<any> {
    const url = `${environment.baseurl}/delete/${id}`
    return this.httpClient.delete<any>(url);
  }

}
