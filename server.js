const express = require("express");

const PORT = 5000;
const app = express();
const productRoutes = require("./routes");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.nvqlfgk.mongodb.net/test", {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(PORT);
console.log(`Running on port ${PORT}`);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
})
module.exports = app;