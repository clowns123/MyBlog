import app from "./app";
import config from "./config";

const { PORT } = config;

app.listen(PORT | 4000, () => {
  console.log(`Hello Express PORT = ${PORT | 4000}`);
});
