import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/classes/shop';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';



@Component({
  selector: 'app-show-shops',
  templateUrl: './show-shops.component.html',
  styleUrls: ['./show-shops.component.scss']
})
export class ShowShopsComponent implements OnInit {
  panelOpenState = false;
  shopsList = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllShops().subscribe(res => {
      console.log('res', res);
      this.shopsList = res;

    });
  }
  getAllShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(`http://localhost:8090/api/shops`).pipe(
      map(res => res.map(d  => new Shop(d))));
  }


}
