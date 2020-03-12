
module.exports = {
  up: (queryInterface: any, Sequelize:any) => queryInterface.createTable('transaction', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    trx_id: {
      type: Sequelize.STRING,
      references: {
        model: 'invoice',
        key: 'trx_id',
      },
    },
    payment_amount: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    payment_ntb: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    datetime_payment: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  }),
  down: (queryInterface: any) => queryInterface.dropTable('transaction'),
};
