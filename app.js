///npm init -y
//npm i express
//npm i dotenv
//npm i mongoose
//npm i jsonwebtoken
//node app.js debug

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const app = express();

const port = process.env.PORT;

// Middleware
app.use(express.json());
if (process.argv.includes("debug")) {
  app.use((req, res, next) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFileSync("debug.log", log);
    next();
  });
}

// Routes
app.use("/ads", require("./routes/adRoutes"));
app.use("/users", require("./routes/userRoutes"));

app.get("/heartbeat", (req, res) => {
  res.send(new Date().toISOString());
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.png"));
});

//Error middleware
app.use(require("./middleware/errorHandler"));

async function main() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: process.env.DATABASE_NAME,
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

// Start server
main()
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((err) => console.error(err));
