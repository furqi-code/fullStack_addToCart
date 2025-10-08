const express = require("express");
const app = express();
const PORT = 1111;
const cors = require("cors");
const bodyParser = require("body-parser");
const {executeQuery} = require("./mySqldb/Query");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/products", async (req, res) => {
  try{
    const products = await executeQuery(`select * from products where category = ?`, req.query.category);
    res.status(200).send(products);
  }catch(err){
    console.log("Error fetching products", err);
    res.status(500).send({
      message: err.message ? err.message : "Something went wrong"
    })
  }
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
