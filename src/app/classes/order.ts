import { Time } from '@angular/common';

export class Order {
  public code: number;
  public date: Date;
  public deadline: Date;
  public ready: boolean;
  public taken: boolean;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}
// [code]     BIGINT   IDENTITY (1, 1) NOT NULL,
//     [shopCode] BIGINT   NOT NULL,
//     [date]     DATETIME NOT NULL,
//     [deadline] TIME (7) NOT NULL,
//     [takeTime] TIME (7) NOT NULL,
//     [ready]    BIT      NOT NULL,
//     [status]   BIT      NULL,
