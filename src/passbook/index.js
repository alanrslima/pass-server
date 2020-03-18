const passbook = require("passbook");
let template = passbook("eventTicket", {
  formatVersion: 1,
  passTypeIdentifier: "pass.br.com.sebrae.napalma",
  teamIdentifier: "9ZFP8JD2KJ",
  organizationName: "Sebrae",
  description: "Nome do curso",
  barcode: {
    message: "123456789",
    format: "PKBarcodeFormatQR",
    messageEncoding: "iso-8859-1"
  },
  serialNumber: "12312",
  foregroundColor: 'rgb(255, 255, 255)',
  backgroundColor: "rgb(7, 94, 167)",
  eventTicket: {
    headerFields: [
      {
        key: "date",
        label: "19:45",
        value: "12/12/2019"
      }
    ],
    primaryFields: [
      {
        key: "event",
        label: "PALESTRA",
        value: "Hackathon Woman Power"
      },
    ],
    secondaryFields: [
      {
        key: "participant",
        label: "PARTICIPANTE",
        value: "Marcio Brito"
      },
    ],
    auxiliaryFields: [
      {
        key: "location",
        label: "LOCAL",
        value: "Sebrae no DF",
      },
      {
        key: 'location_aditional',
        value: 'SIA Trecho 3 Lote 1.580',
        textAlignment: "PKTextAlignmentLeft"
      }
    ]
  }
});
template.loadImagesFrom("./src/images");
template.keys("./src/keys", "1234");

module.exports = template.createPass();