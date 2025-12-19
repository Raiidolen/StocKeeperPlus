import {readFileSync} from "node:fs";
import {pool} from "../../database/database.js";

const initDB = readFileSync(
    './API/scripts/SQL/initDB.sql',
    {encoding: "utf-8"}
);

const fillingDB = readFileSync(
    './API/scripts/SQL/fillingDB.sql',
    {encoding: "utf-8"}
);

try {
    await pool.query(initDB, []);
    console.log("Init done");
    await pool.query(fillingDB, []);
    console.log("Filling done");
} catch (e) {
    console.error(e);
}