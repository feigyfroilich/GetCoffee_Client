export class Product  {
  public code: number;
  public name: string;
  public parentCode: any;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
