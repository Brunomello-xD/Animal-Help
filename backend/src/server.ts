// Main file
import "reflect-metadata";
import express from "express";
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

// Importação para subir o banco de dados
import "./database/connection"

import { routes } from "./router";
import errorHandler from './errors/handler';

const app = express();

// Liberando as requisições para diferentes dominios - cors
app.use(cors());
// Usando json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// Configurando para poder exibir as imagens
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3000, () => console.log("✅ Server is running"));