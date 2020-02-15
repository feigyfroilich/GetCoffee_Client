import { Injectable } from '@angular/core';
import { User } from 'src/app/classes/user';
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
    console.log('user', u);
    return this.http.post(`http://localhost:8090/api/users`, u).map(res => res);
  }
  getAllUsersDB(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8090/api/Users`).pipe(
      map(res => res.map(u => new User(u))));
  }
  saveCurrentUser(user: User) {
    console.log('im here');
    this.user = user;
  }
  isShopOwner(): boolean {
    return this.user.shopId !== null;
  }
  getShopId(): any {
    return this.user.shopId;
  }
  getCurrentUser(): User {
    console.log('here', this.user);
    return this.user;
  }

}
