export class ShopProduct {

  public productCode: any;
  public shopCode: any;
  public price: any;
  public duration: number;
  public status: any;
  public name: any;
  public categoryName: any;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
