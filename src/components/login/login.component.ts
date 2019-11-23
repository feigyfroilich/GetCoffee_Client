import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable, of, EMPTY } from 'rxjs';
import { User } from 'src/classes/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }
  username: string;
  password: string;
  users = [];
  ngOnInit() {

  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8090/api/users`).pipe(
      map(res => res.map(u => new User(u))));
  }

  login(): void {
    console.log('user', this.users);
    this.getAllUsers().subscribe(res => {
      console.log('users ', res);
      this.users = res;
    });
    console.log('user', this.users);
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/shops']);
    } else {
      alert('Invalid credentials');
    }
  }
}

