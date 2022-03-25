const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const { connect } = require("./app");

//uncaught exception error
process.on("uncaughtException", (err)=> {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncuaght exception error`);

    process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

//connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


//unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
