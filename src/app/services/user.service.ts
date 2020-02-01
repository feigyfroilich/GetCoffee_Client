import { Injectable } from '@angular/core';
import { User } from 'src/classes/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private http: HttpClient) { }
  addNewUserDB(u: User) {
    this.http.post(`http://localhost:8090/api/users`, u).subscribe(res => {
      console.log('inside postmehtod of sub.function', res.toString());
    });
  }
  getAllUsersDB(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8090/api/Users`).pipe(
      map(res => res.map(u => new User(u))));
  }
  saveCurrentUser(user: User) {
    console.log('im here')
    this.user = user;
  }
  isShopOwner(): boolean {
    return this.user.shopId !== null;
  }
  getShopId(): number {
    return this.user.shopId;
  }

}
