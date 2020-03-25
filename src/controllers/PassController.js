const passbook = require("passbook");

module.exports = {
  async index(request, response) {

    // const {
    //   date,
    //   hour,
    //   place,
    //   eventType,
    //   additionalPlace,
    //   eventName,
    //   participant,
    //   serialNumber,
    //   qrdCodeMessage
    // } = request.body;

    // let template = passbook("eventTicket", {
    //   formatVersion: 1,
    //   passTypeIdentifier: "pass.br.com.sebrae.napalma",
    //   teamIdentifier: "9ZFP8JD2KJ",
    //   organizationName: "Sebrae",
    //   description: eventName,
    //   barcode: {
    //     message: qrdCodeMessage,
    //     format: "PKBarcodeFormatQR",
    //     messageEncoding: "iso-8859-1"
    //   },
    //   serialNumber: serialNumber,
    //   foregroundColor: 'rgb(255, 255, 255)',
    //   backgroundColor: "rgb(7, 94, 167)",
    //   eventTicket: {
    //     headerFields: [
    //       {
    //         key: "date",
    //         label: hour,
    //         value: date,
    //       }
    //     ],
    //     primaryFields: [
    //       {
    //         key: "event",
    //         label: eventType,
    //         value: eventName,
    //       },
    //     ],
    //     secondaryFields: [
    //       {
    //         key: "participant",
    //         label: "PARTICIPANTE",
    //         value: participant
    //       },
    //     ],
    //     auxiliaryFields: [
    //       {
    //         key: "location",
    //         label: "LOCAL",
    //         value: place,
    //       },
    //       {
    //         key: 'location_aditional',
    //         value: additionalPlace,
    //         textAlignment: "PKTextAlignmentLeft"
    //       }
    //     ]
    //   }
    // });
    // template.loadImagesFrom("./src/images");
    // template.keys("./src/keys", "1234");
    // const pass = template.createPass();

    let template = passbook("eventTicket", {
      formatVersion: 1,
      passTypeIdentifier: "pass.br.com.sebrae.napalma",
      teamIdentifier: "9ZFP8JD2KJ",
      organizationName: "Sebrae",
      description: 'Teste',
      barcode: {
        message: '1234',
        format: "PKBarcodeFormatQR",
        messageEncoding: "iso-8859-1"
      },
      serialNumber: "1234",
      foregroundColor: 'rgb(255, 255, 255)',
      backgroundColor: "rgb(7, 94, 167)",
      eventTicket: {
        headerFields: [
          {
            key: "date",
            label: "12:45",
            value: "20/06/2020",
          }
        ],
        primaryFields: [
          {
            key: "event",
            label: "PALESTRA",
            value: "Nome da palestra",
          },
        ],
        secondaryFields: [
          {
            key: "participant",
            label: "PARTICIPANTE",
            value: "joão"
          },
        ],
        auxiliaryFields: [
          {
            key: "location",
            label: "LOCAL",
            value: "Sebrae",
          },
          {
            key: 'location_aditional',
            value: "Guara",
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
  },
}
