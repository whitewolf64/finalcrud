import mysql from "mysql"

//connexion database backend//
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Wildcodeschoolcrud64+",
    database: "crud2",
});