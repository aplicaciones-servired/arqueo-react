//configuracion de la base de datos
import { createPool } from "mysql2/promise";
export const pool = createPool({
  host: "172.20.1.92",
  user: "cliente",
  password: "adminadmon",
  database: "appseguimiento",
});
