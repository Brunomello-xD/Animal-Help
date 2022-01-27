// Main file
import "reflect-metadata";
import express from "express";

// Importação para subir o banco de dados
import "./database/connection"

import { routes } from "./router";

const app = express();

// Usando json
app.use(express.json());

app.use(routes)

app.listen(3000, () => console.log("✅ Server is running"));