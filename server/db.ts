import { Sequelize } from "sequelize";

const dbInstance = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: parseInt("3306", 10), // Convert port to integer
  username: "root",
  password: "",
  database: "agen_tour",
  logging: false, // Set to true if you want to see SQL queries
});

(async () => {
  try {
    await dbInstance.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default dbInstance;
