require("dotenv").config();

const express = require("express");
const session = require("express-session")
const path = require("path");
const MongoDBSession = require('connect-mongodb-session')(session)

const connectToDb = require("./database/db.js");
const expressEjsLayouts = require("express-ejs-layouts");


const routes = require("./routes/routes.js");
const routesVendas = require("./routes/vendasRoutes.js");

const app = express();

const port = process.env.PORT || 3333;

const store = new MongoDBSession({
  uri: process.env.DB_URI,
  collection: 'mySessions'
});

connectToDb();
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: store,

}))





app.use(expressEjsLayouts)
app.set('layout', './layout/base.ejs')
app.use(express.json());
app.use(express.urlencoded());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(routes)
app.use(routesVendas)


app.listen(port, () => {
  console.log("listening on port " + port)
})
