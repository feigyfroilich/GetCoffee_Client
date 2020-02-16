export class Category {
  public code: number;
  public name: string;
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

