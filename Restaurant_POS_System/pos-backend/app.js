const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// Connect Database FIRST
connectDB();

// Middlewares
app.use(cors({
  origin: [
    "http://localhost:5173",           // local dev
    "https://*.vercel.app"             // production frontend
  ],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Root Endpoint (health check)
app.get("/", (req, res) => {
  res.status(200).json({ message: "POS Server running" });
});

// Routes
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));
app.use("/api/table", require("./routes/tableRoute"));
app.use("/api/payment", require("./routes/paymentRoute"));

// Global Error Handler (LAST)
app.use(globalErrorHandler);

// Server (Render requires process.env.PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`☑️ POS Server listening on port ${PORT}`);
});
