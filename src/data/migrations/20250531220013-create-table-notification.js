'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notification', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      recipientEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recipientPhone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateSend: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timestamps: false
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('notification');
  }
};
