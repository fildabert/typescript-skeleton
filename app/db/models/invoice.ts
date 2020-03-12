/* eslint-disable camelcase */
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  HasMany,
  DataType,
  Default,
} from 'sequelize-typescript';

import Transaction from './transaction';
import BillingType from './billingType';

@Table({ tableName: 'invoice', timestamps: true })
export default class Invoice extends Model<Invoice> {
  // FK
  @AllowNull(false)
  @Column({ field: 'trx_id' })
  trxId!: string;

  @HasMany(() => Transaction)
  transactions!: Transaction[];

  @AllowNull(false)
  @Column({ field: 'virtual_account' })
  virtualAccount!: string;

  @AllowNull(false)
  @Column
  agentId!: string;

  @AllowNull(false)
  @Column({ type: DataType.DOUBLE, field: 'trx_amount' })
  trxAmount!: number;

  @AllowNull(false)
  @Column({ field: 'customer_name' })
  customerName!: string;

  @Column({ field: 'customer_email' })
  customerEmail!: string;

  @Column({ field: 'customer_phone' })
  customerPhone!: string;

  @ForeignKey(() => BillingType)
  @AllowNull(false)
  @Column({ field: 'billing_type_code' })
  billingTypeCode!: string;

  @BelongsTo(() => BillingType)
  billingType!: BillingType;

  @Default(0)
  @Column({ type: DataType.DOUBLE, field: 'cumulative_payment_amount' })
  cumulativePaymentAmount!: number;

  @Column({ field: 'va_status' })
  vaStatus!: number;

  @Column
  description!: string;

  @CreatedAt
  @Column({ field: 'datetime_created' })
  datetimeCreated!: Date;

  @UpdatedAt
  @Column({ field: 'datetime_last_updated' })
  datetimeLastUpdated!: Date;

  @Column({ field: 'datetime_expired' })
  datetimeExpired!: Date;
}
