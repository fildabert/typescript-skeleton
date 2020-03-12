/* eslint-disable camelcase */
import {
  Table, Column, Model, AllowNull, CreatedAt, UpdatedAt, Unique, Default,
} from 'sequelize-typescript';


@Table({ tableName: 'billing_type', timestamps: true })
export default class BillingType extends Model<BillingType> {
  @Unique
  @AllowNull(false)
  @Column({ field: 'billing_type_code' })
  billingTypeCode!: string;

  @Column
  description!: string;

  @Default(true)
  @Column({ field: 'is_active' })
  isActive!: Boolean;

  @CreatedAt
  created_at!: Date;

  @UpdatedAt
  updated_at!: Date;
}
