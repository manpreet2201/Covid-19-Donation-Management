/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',
  attributes: {
    updatedAt: false,
    createdAt: false,

    packageId: {
      type: 'string', required: true
    },
    userId: {
      type: 'string', required: true
    },
    itemId: {
      type: 'string', required: true
    },
    qty: {
      type: 'number', required: true,
    },
    date: {
      type: 'string', required: true,
    },
    time: {
      type: 'string', required: true,
    },
    result: {
      type: 'string', required: true
    }
  },
};
