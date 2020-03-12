
module.exports = {
  up: (queryInterface: any, Sequelize: any) => queryInterface.createTable('billing_type', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    billing_type_code: {
      type: Sequelize.STRING,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
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
  down: (queryInterface: any) => queryInterface.dropTable('billing_type'),
};
