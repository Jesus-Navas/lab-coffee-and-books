module.exports = (app) => {
  app.use("/", require("./place.routes"));
  app.use("/maps", require("./map.routes"));
  app.use("/api", require("./api.routes"));
};
