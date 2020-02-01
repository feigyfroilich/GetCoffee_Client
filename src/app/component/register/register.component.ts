import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  password1: string;
  newUser: boolean;
  equals: boolean;
  users = [];
  shopId: boolean;
  shopOwner;
  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.newUser = false;
    this.equals = false;
    this.password1 = '';
    this.password = '';
    this.userService.getAllUsersDB().subscribe(res => {
      console.log('users ', res);
      this.users = res;
    });
  }

  check_equals(): boolean {
    return this.password !== this.password1 && this.newUser;
  }
  login(): void {
    this.addNewUser();
    // console.log('user', this.users);
    // let x: any;
    // x = this.users.find(user => user.name === this.username);
    // if (x) {
    //   if (x.password === this.password) {
    //     this.router.navigate(['/maps']);
    //   } else {
    //     alert('Invalid password');
    //   }
    // } else {
    //   alert('Invalid credentials , are you sure you eve sign to GetCoffee+ ??');
    // }
  }

  addNewUser(): void {
    if (this.password !== this.password1) {
      this.equals = true;
      return;
    }
    let u: User;
    u = new User({ id: 0, name: this.username, password: this.password, shopId: this.shopId });
    this.userService.saveCurrentUser(u);
    if (!this.userService.isShopOwner()) {
      this.router.navigate(['/newOrder']);
      this.userService.addNewUserDB(u);
      this.equals = false;
    } else {
      this.router.navigate(['/NewShop']);
    }

  }

}
