import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable, of, EMPTY } from 'rxjs';
import { User } from 'src/classes/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }
  username: string;
  password: string;
  password1: string;
  newUser: boolean;
  users = [];
  ngOnInit() {
    this.newUser = false;
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8090/api/users`).pipe(
      map(res => res.map(u => new User(u))));
  }

  login(): void {
    if (this.newUser === true)
    {
      this.addNewUser();
      return;
    }
    console.log('user', this.users);
    this.getAllUsers().subscribe(res => {
      console.log('users ', res);
      this.users = res;
    });
    console.log('user', this.users);
    // arr.find(e => e.foo === 'bar')
    //   function filterByValue(array, string) {
    //     return array.filter(o =>
    //         Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    // }
    let x: any;
    x = this.users.find(user => user.name === this.username);
    if (x) {
      if (x.password === this.password) {
        this.router.navigate(['/shops']);
      } else {
        alert('Invalid password');
      }
    } else {
      alert('Invalid credentials , are you sure you eve sign to GetCoffee+ ??');
    }
  }
 addNewUser(): void {
   console.log('im in add new user');
 }
}

