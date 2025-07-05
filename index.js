const express = require("express");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const { connectTOMongoDB } = require("./connect");
const URL = require("./models/url");
const path = require("path");

const app = express();

const port = 8001;

connectTOMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);

app.use("/", staticRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(port, () => {
  console.log(`Server Started at port http://localhost:${port}`);
});
