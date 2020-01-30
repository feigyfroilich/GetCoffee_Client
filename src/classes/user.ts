import { DomSanitizer } from '@angular/platform-browser';
export class User {
  public id: number;
  public name: string;
  public password: string;
  public shop_code:number;
  constructor(params: User = {} as User) {
    this.name = name;
    Object.assign(this, params);
  }
//   class BoxTest {
//     public x?: number = 1;

//     constructor(params: BoxTest = {} as BoxTest) {
//         Object.assign(this, params);
//     }
// }
}
