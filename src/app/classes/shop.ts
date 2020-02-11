export class Shop {
  public code: number;
  public name: string;
  public location: string;
  public loginCode: string;
  public shipment: boolean;
  public status: boolean = null;
  public ran: number = null;
  public numOfCustomer: number = null;
  public accountNumber: number = null;
  public lat: string;
  public long: string;
  public categoryCode: number;


  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

