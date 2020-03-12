/* eslint-disable camelcase */
import {
  Table, Column, Model, ForeignKey, AllowNull, CreatedAt, UpdatedAt, DataType,
} from 'sequelize-typescript';

import Invoice from './invoice';

@Table({ tableName: 'transaction', timestamps: true })
export default class Transaction extends Model<Transaction> {
  @ForeignKey(() => Invoice)
  @AllowNull(false)
  @Column
  trx_id!: string;

  @AllowNull(false)
  @Column({ field: 'payment_amount', type: DataType.DOUBLE })
  paymentAmount!: number;

  @AllowNull(false)
  @Column({ field: 'payment_ntb' })
  paymentNtb!: string;

  @CreatedAt
  @Column({ field: 'datetime_payment' })
  datetimePayment!: Date;

  @UpdatedAt
  updated_at!: Date;
}
