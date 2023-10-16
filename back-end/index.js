import express from "express";
import bodyParser from "body-parser";
import { router } from './src/routes/routes.js';
import { PORT } from "./src/config/config.js";
import cors from 'cors';
import swaggerUI from "swagger-ui-express";
import { swaggerConfig } from "./docs/index.js"

const app = express();

app.use(express.json({ limit: '50mb' }));

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))


app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use("/api/book", router);

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerConfig, { explorer: true })
);


app.listen(PORT, () => {
  console.log(`listening in ${PORT}`);
});