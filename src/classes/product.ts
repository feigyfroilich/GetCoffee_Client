export class Product  {
  public code: number;
  public name: string;
  public parentCode: any;
  // public long code { get; set; }
  //       public string name { get; set; }
  //       public Nullable<long> parentCode { get; set; }


  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
