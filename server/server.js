const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./index.js");

mongoose
  .connect("mongodb://localhost:27017/music-manager", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successful...");
  });

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!!! Shutting down...");
  server.close(() => {
    console.log("Process terminated!!!");
  });
});
