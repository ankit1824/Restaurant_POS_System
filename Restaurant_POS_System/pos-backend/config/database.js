const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    if (!config.databaseURI) {
      throw new Error("MONGO_URI is not defined");
    }

    const conn = await mongoose.connect(config.databaseURI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
