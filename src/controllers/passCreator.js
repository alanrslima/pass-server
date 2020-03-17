const api = require("../services/api");

module.exports = {
  async index(req, res) {
    try {
      const { authorization } = req.headers;
      const { IDAgenda, Descricao } = req.body;
      const { key: idFoto } = req.file;
      await api.put(
        "TAgendaVisita/Foto",
        {
          IDAgenda,
          IDFoto: idFoto,
          Link: req.file.location || req.file.path,
          Descricao
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization
          }
        }
      );
      return res.json({ msg: "File uploaded successfully!" });
    } catch (error) {
      return res.status(500).send({ msg: "Internal error!" });
    }
  }
};
