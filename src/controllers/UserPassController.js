const passbook = require("passbook");

module.exports = {
  async index(request, response) {
    try {

      const { data } = request.headers;
      const dataParsed = JSON.parse(data);
      console.log(dataParsed);

      const {
        name,
        cpf,
        serialNumber,
        qrdCodeMessage
      } = dataParsed;

      let template = passbook("eventTicket", {
        formatVersion: 1,
        passTypeIdentifier: "pass.br.com.sebrae.napalma",
        teamIdentifier: "9ZFP8JD2KJ",
        organizationName: "Sebrae",
        description: 'Usuário',
        barcode: {
          message: qrdCodeMessage,
          format: "PKBarcodeFormatQR",
          messageEncoding: "iso-8859-1"
        },
        serialNumber: serialNumber,
        foregroundColor: 'rgb(255, 255, 255)',
        backgroundColor: "rgb(7, 94, 167)",
        eventTicket: {
          primaryFields: [
            {
              key: "name",
              label: 'CLIENTE',
              value: name,
            },
          ],
          secondaryFields: [
            {
              key: "cpf",
              label: "CPF",
              value: cpf
            },
          ],
        }
      });
      template.loadImagesFrom("./src/images");
      template.keys("./src/keys", "1234");
      const pass = template.createPass();


      pass.render(response, function (error) {
        if (error) console.error(error);
      });
    } catch (error) {
      console.log(error);
      return response.status(404).json({ error: "Error to create Wallet" })
    }
  },
}
