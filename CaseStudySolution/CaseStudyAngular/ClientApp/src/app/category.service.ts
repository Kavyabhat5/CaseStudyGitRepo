import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkOut_Category } from './Category'
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  private _url = 'http://localhost:61244/api/Category';
  constructor(private http: HttpClient) {

  }
  GetAll(): Observable<WorkOut_Category[]>
  {
    return this.http.get<WorkOut_Category[]>(this._url)
  }
  save(Category: WorkOut_Category) {
    return this.http.post(this._url, Category);
  }

   update(Category: WorkOut_Category) {
    return this.http.put(this._url, Category);
  }

  delete(Category_Id: Number) {
    return this.http.delete(this._url + '/${Category_Id}');
  }

  }

