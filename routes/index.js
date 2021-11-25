const ticketRoutes = require("./tickets");

const constructorMethod = (app) => {
  app.use("/", ticketRoutes);
  app.use("*", async (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });
};

module.exports = constructorMethod;
