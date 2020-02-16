import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList: Array<Category> = [];
  categoryPartentList: Array<Category> = [];
  categoryChildrenList: Array<Category> = [];
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  private getCategoriesDB(): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:8090/api/Categories`);
    // .pipe(
    //   map(res => res.map(d => new Category(d))));
  }

  getAllCategories(): any {
    console.log('getAllCategories');
    this.getCategoriesDB().subscribe(category => {
      console.log('category', category);
      this.categoryList = category;
      // tslint:disable-next-line: max-line-length
      // this.categoryList.forEach(cat => cat.parentCode === null ? this.categoryPartentList.push(cat) : this.categoryChildrenList.push(cat));
      console.log('all', this.categoryList);
      console.log('parent', this.categoryPartentList);
      console.log('child', this.getAllChildeCategory);
    });

  }
  getAllParentCategory(): any {
    return this.categoryPartentList;
  }
  getAllChildeCategory(): any {
    return this.categoryChildrenList;
  }
  addCategoryToDB(category: Category): Observable<any> {
    return this.http.post(`http://localhost:8090/api/Categories`, category);

  }
}
