const passbook = require("passbook");

module.exports = {
  async index(request, response) {
    try {

      const { data } = request.headers;
      const dataParsed = JSON.parse(data);
      const {
        date,
        hour,
        place,
        eventType,
        additionalPlace,
        eventName,
        participant,
        serialNumber,
        qrdCodeMessage
      } = dataParsed;

      let template = passbook("eventTicket", {
        formatVersion: 1,
        passTypeIdentifier: "pass.br.com.sebrae.napalma",
        teamIdentifier: "9ZFP8JD2KJ",
        organizationName: "Sebrae",
        description: eventName,
        barcode: {
          message: qrdCodeMessage,
          format: "PKBarcodeFormatQR",
          messageEncoding: "iso-8859-1"
        },
        serialNumber: serialNumber,
        foregroundColor: 'rgb(255, 255, 255)',
        backgroundColor: "rgb(7, 94, 167)",
        eventTicket: {
          headerFields: [
            {
              key: "date",
              label: hour,
              value: date,
            }
          ],
          primaryFields: [
            {
              key: "event",
              label: eventType,
              value: eventName,
            },
          ],
          secondaryFields: [
            {
              key: "participant",
              label: "PARTICIPANTE",
              value: participant
            },
          ],
          auxiliaryFields: [
            {
              key: "location",
              label: "LOCAL",
              value: place,
            },
            {
              key: 'location_aditional',
              value: additionalPlace,
              textAlignment: "PKTextAlignmentLeft"
            }
          ]
        }
      });
      template.loadImagesFrom("./src/images");
      template.keys("./src/keys", "1234");
      const pass = template.createPass();


      pass.render(response, function (error) {
        if (error) console.error(error);
      });
    } catch (error) {
      return response.status(404).json({ error: "Error to create Wallet" })
    }
  },
}
