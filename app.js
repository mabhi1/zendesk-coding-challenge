const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

routes(app);

app.listen(3000, () => {
  console.log("Server started at port 3000!");
});