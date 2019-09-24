import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from 'src/classes/shop';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-show-shops',
  templateUrl: './show-shops.component.html',
  styleUrls: ['./show-shops.component.scss']
})
export class ShowShopsComponent implements OnInit {
  panelOpenState = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllShops().subscribe(res => {
      console.log('res', res);
    });
  }
  getAllShops() {
    return this.http.get(`http://localhost:8090/api/shops`);
}
}
