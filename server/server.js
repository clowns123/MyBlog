import app from "./app";
import config from "./config";

const { PORT } = config;

app.listen(PORT | 5000, () => {
  console.log(`Hello Express PORT = ${PORT}`);
});
