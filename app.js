require("dotenv").config();
const express = require("express");
const app = express();

const router = require("./routes/userRoutes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
