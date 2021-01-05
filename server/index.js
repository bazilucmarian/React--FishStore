const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const upload = multer();
const dotenv = require("dotenv");
const pdfTemplate = require("./documents");

dotenv.config();
const app = express();

app.use(upload.array());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("fish-inventory/build");
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "fish-inventory", "build", "index.html")
    )
  );
}

//POST- PDF GENERATIONS AND FETCH DATA
app.post("/create-pdf", (req, res) => {
  const data = JSON.parse(req.body.data);
  pdf.create(pdfTemplate(data), {}).toFile(`${__dirname}/result.pdf`, (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

//GET --SEND PDF TO THE CLIENT

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
