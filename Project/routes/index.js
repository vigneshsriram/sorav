//const postRoutes = require("./posts");
const recipeRoutes = require("./recipes");

const constructorMethod = app => {
  //app.use("/posts", postRoutes);
  app.use("/", recipeRoutes);

   app.use("*", (req, res) => {
     res.status(404).json({ error: "Not Found" });
   });
};

module.exports = constructorMethod;