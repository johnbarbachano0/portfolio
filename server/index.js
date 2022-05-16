require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const middlewares = require("./middlewares/errorHandlers");
const db = require("./models");
const passport = require("passport");
const http = require("http");

//Initialize server
const server = http.createServer(app);

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Morgan Helmet Cors
if (process.env.NODE_ENV === "development") {
  app.use(morgan("common"));
  app.use(helmet());
}

app.use(
  cors({
    origin: process.env.APP_CLIENT,
    credentials: true,
  })
);

//Initialize session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 12, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  })
);

require("./middlewares/strategy");

app.use(passport.initialize());
app.use(passport.session());

// Routers;
const UsersRouter = require("./routes/Users");
app.use("/user", UsersRouter);
const HistoryRouter = require("./routes/AuditTrail");
app.use("/history", HistoryRouter);
const MaintenanceRouter = require("./routes/Maintenance");
app.use("/maintenance", MaintenanceRouter);
const TestimonialsRouter = require("./routes/Testimonials");
app.use("/testimonials", TestimonialsRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

//mySQL connection
db.sequelize.sync().then(() => {
  const port = process.env.PORT || 3007;
  server.listen(port, () => {
    console.log(`Server Live with port:${port}`);
  });
});
