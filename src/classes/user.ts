export class User {
  public id: number;
  public name: string;
  public password: string;
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
