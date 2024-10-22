module.exports = class MateriasController {
  static async getMaterias(req, res) {
    return res.render("materias");
  }

  static async getMateriaEducacaoFisica(req, res) {
    return res.render("educacao-fisica");
  }

  static async getMateriaTecnologiaeInovacao(req, res) {
    return res.render("tecnologia-e-inovacao");
  }
  static async getMateriaArtes(req, res) {
    return res.render("artes");
  }
  static async getMateriaCienciasHumanas(req, res) {
    return res.render("ciencias-humanas");
  }
  static async getMateriaCienciasdaNatureza(req, res) {
    return res.render("ciencias-da-natureza");
  }
  static async getMateriaFisica(req, res) {
    return res.render("fisica");
  }
  static async getMateriaQuimica(req, res) {
    return res.render("quimica");
  }
  static async getMateriaPortugues(req, res) {
    return res.render("portugues");
  }
  static async getMateriaEspanhol(req, res) {
    return res.render("espanhol");
  }
  static async getMateriaIngles(req, res) {
    return res.render("ingles");
  }
  static async getMateriaMatematica(req, res) {
    return res.render("matematica");
  }
};
