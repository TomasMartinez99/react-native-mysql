import express from "express";
// Paquete: Permite que cualquier aplicación de backend pueda conectarse
import cors from "cors";
// Paquete: Permite ver por consola las peticiones que van llegando
import morgan from "morgan"

import tasksRoutes from './routes/tasks';
import { options } from "./swaggerOptions";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
// Configuracion de como se va a comportar la documentación
const specs = swaggerJSDoc(options);

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(tasksRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;