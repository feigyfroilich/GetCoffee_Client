import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable, of, EMPTY } from 'rxjs';
import { User } from 'src/classes/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }
  username: string;
  password: string;
  password1: string;
  newUser: boolean;
  equals: boolean;
  users = [];
  ngOnInit() {
    this.newUser = false;
    this.equals = false;
    this.password1 = '';
    this.password = '';
    this.getAllUsersDB().subscribe(res => {
      console.log('users ', res);
      this.users = res;
    });
  }
  getAllUsersDB(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8090/api/Users`).pipe(
      map(res => res.map(u => new User(u))));
  }
  check_equals(): boolean {
    return this.password !== this.password1 && this.newUser;
  }
  na(){
    console.log('in shopkeeper');
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/addShop']);
  }
  login(): void {
    if (this.newUser === true) {
      this.addNewUser();
      return;
    }
    console.log('user', this.users);

    console.log('user', this.users);
    // arr.find(e => e.foo === 'bar')
    //   function filterByValue(array, string) {
    //     return array.filter(o =>
    //         Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    // }
    let user: any;
    user = this.users.find(user => user.name === this.username);
    if (user) {
      if (user.password === this.password) {

        this.router.navigate(['/maps']);
        this.userService.saveCurrentUser(user);
      } else {
        alert('Invalid password');
      }
    } else {
      alert('Invalid credentials , are you sure you eve sign to GetCoffee+ ??');
    }
  }
  addNewUserDB(u: User) {
    this.http.post(`http://localhost:8090/api/users`, u).subscribe(res => {
      console.log('inside postmehtod of sub.function', res.toString());
    });
  }
  addNewUser(): void {
    if (this.password !== this.password1) {
      this.equals = true;
      return;
    }
    let u: User;
    u = new User({ id: 0, name: this.username, password: this.password , shopId: null});
    console.log('im in add new user', u);
    this.addNewUserDB(u);
    console.log('im after add new user', u);
    this.equals = false;
    this.router.navigate(['/login']);
  }
}

