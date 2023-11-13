const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Set up Handlebars as the view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

// Set up session
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 86400000, // 1 day in milliseconds
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
// Add the following line to serve the "uploads" folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Set up routes
app.use(routes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
