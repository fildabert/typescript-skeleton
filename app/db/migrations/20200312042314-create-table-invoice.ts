
module.exports = {
  up: (queryInterface: any, Sequelize: any) => queryInterface.createTable('invoice', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    trx_id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    virtual_account: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    agentId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    trx_amount: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    customer_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    customer_email: {
      type: Sequelize.STRING,
    },
    customer_phone: {
      type: Sequelize.STRING,
    },
    billing_type_code: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'billing_type',
        key: 'billing_type_code',
      },
    },
    cumulative_payment_amount: {
      type: Sequelize.DOUBLE,
    },
    va_status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    datetime_created: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    datetime_last_updated: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    datetime_expired: {
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface: any) => queryInterface.dropTable('invoice'),
};
