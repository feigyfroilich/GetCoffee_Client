export class OrderItem {

  public Code: number;
  public orderCode: number;
  public productCode: number;
  public amount: number;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
