import express from "express";
import hpp from "hpp";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import config from "./config";

//Routes
import routers from "./routers/index";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connect Success!!"))
  .catch((e) => console.log(e));

// Router
app.get("/");
app.use("/api/post", routers.post);

export default app;
