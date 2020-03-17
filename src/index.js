const express = require("express");
// const cors = require("cors");

const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const passbook = require("passbook");
// 9ZFP8JD2KJ
let template = passbook("storeCard", {
  passTypeIdentifier: "pass.br.com.sebrae.napalma",
  teamIdentifier: "9ZFP8JD2KJ",
  organizationName: "Sebrae",
  description: "Description"
});
template.loadImagesFrom("./src/images");
template.fields.barcode = {
  message: "123456789",
  format: "PKBarcodeFormatPDF417",
  messageEncoding: "iso-8859-1"
};
template.fields.serialNumber = "12312";
template.keys("./src/keys", "1234");

let pass = template.createPass();

app.get("/mypass", function(request, response) {
  console.log(pass);
  pass.render(response, function(error) {
    if (error) console.error(error);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
