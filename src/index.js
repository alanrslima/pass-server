const express = require("express");

const app = express();
const pass = require("./passbook");

app.get("/pass", function (request, response) {
  pass.render(response, function (error) {
    if (error) console.error(error);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}`);
});
