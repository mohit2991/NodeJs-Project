const express = require("express");
const app = express();

const routers = require("./routes/userRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routers);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
