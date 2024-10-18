const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const quotesRoutes = require("./routes/quotesRoute");

const port = process.env.PORT || 8080;
const apiVersion = "v1";

app.use(`/api/${apiVersion}/quotes`, quotesRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
