// server/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/api");
const configurePassport = require("./config/passport.js");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

(async () => {
  try {
    // connect Mongo
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");

    // session store
    const store = MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    });

    const isProduction = process.env.NODE_ENV === "production";

    app.set("trust proxy", 1);

    app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store,
        cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
          sameSite:'none',
          secure: true,
        },
      })
    );

    // passport
    configurePassport(passport);
    app.use(passport.initialize());
    app.use(passport.session());

    // routes
    app.use("/auth", authRoutes);
    app.use('/api', apiRoutes);

    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log(`Server running on ${port}`));
  } catch (err) {
    console.error("Server start failed", err);
    process.exit(1);
  }
})();
