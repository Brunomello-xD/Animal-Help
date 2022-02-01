//Conexão com o banco de dados
import { createConnection } from "typeorm";

createConnection().then(() => console.log("✅ Successful database connection"))