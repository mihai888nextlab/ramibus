import mysql, { Connection, MysqlError } from "mysql";
import express, { Express, Request, Response } from "express";

function Data() {
  console.log("start");
  const app: Express = express();

  const dbConfig: Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nextlab888!",
    database: "ramibus",
    port: 3306,
  });

  console.log(dbConfig);

  dbConfig.query("SHOW TABLES;", (err: MysqlError | null, result: any) => {
    if (err) {
      return "error";
    } else {
      return "connected";
    }
  });

  app.use(express.json());

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

  return "connected";


export default Data;
