const mongoose = require("mongoose");
const { DB_URI } = require("./config");

// connect to MongoDB
async function start() {
    try {
      await mongoose.connect(DB_URI,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
      console.error(error);
    }
  }

module.exports = start;