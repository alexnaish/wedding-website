const mongoose = require('mongoose');

module.exports = {
  connect: async () => {
    return await mongoose.createConnection(
      process.env.MONGODB_ATLAS_URI,
      {
        bufferCommands: false,
        bufferMaxEntries: 0,
        useNewUrlParser: true
      }
    );
  },
  loadModel: (connection, name, schema) => {
    return connection.model(name, schema);
  }
};
