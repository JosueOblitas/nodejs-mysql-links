import app from "./app.js";
import { port, host } from './config.js'

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});