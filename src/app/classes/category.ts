export class Category {
  public code: number;
  public name: string;
  public parentCode: number;
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

