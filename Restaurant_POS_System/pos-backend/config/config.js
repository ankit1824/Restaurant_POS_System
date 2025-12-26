require("dotenv").config();

const config = Object.freeze({
  port: process.env.PORT, // Render provides this
  databaseURI: process.env.MONGO_URI, // FIXED name
  nodeEnv: process.env.NODE_ENV || "development",

  accessTokenSecret: process.env.JWT_SECRET,

  razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  razorpaySecretKey: process.env.RAZORPAY_KEY_SECRET,
  razorpayWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET
});

module.exports = config;

