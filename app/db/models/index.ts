import sequelize from '../datasource/postgres';

import Invoice from './invoice';
import Transaction from './transaction';
import BillingType from './billingType';


sequelize.addModels([Invoice, Transaction, BillingType]);


export default sequelize.models;
