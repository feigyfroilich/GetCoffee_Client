export class Product  {
  [x: string]: any;
  public code: number;
  public name: string;
  public childCategoryCode: any;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
