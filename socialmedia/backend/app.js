const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Importing Routes
const post = require("./routes/post");
const user = require("./routes/user");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);
// - This line serves static files (like HTML, CSS, JavaScript) from the frontend/build directory.

app.use(express.static(path.join(__dirname, "../frontend/build")));

//This line sends the index.html file for any request that doesn't match other routes. This is useful for applications with client-side routing.

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;
