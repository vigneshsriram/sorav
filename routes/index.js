
const checkRoutes = require("./checking");

const constructorMethod = app =>{
    app.use("/", checkRoutes);

    app.use("*", (req, res) => {
        return res.redirect("/");    
        next();
       });

}

module.exports = constructorMethod;