class MateriasController {
  static async getMaterias(req, res) {
    res.render("materias");
  }

  static async getMateriaEducacaoFisica(req, res) {
    res.render("educacao-fisica");
  }

  static async getMateriaTecnologia(req, res) {
    res.render("tecnologias-e-inovacao");
  }

  static async getMateriaArtes(req, res) {
    res.render("artes");
  }

  static async getMateriaCienciasHumanas(req, res) {
    res.render("ciencias-humanas");
  }

  static async getMateriaCienciasNatureza(req, res) {
    res.render("ciencias-da-natureza");
  }

  static async getMateriaFisica(req, res) {
    res.render("fisica");
  }

  static async getMateriaQuimica(req, res) {
    res.render("quimica");
  }

  static async getMateriaPortugues(req, res) {
    res.render("portugues");
  }

  static async getMateriaEspanhol(req, res) {
    res.render("espanhol");
  }

  static async getMateriaIngles(req, res) {
    res.render("ingles");
  }

  static async getMateriaMatematica(req, res) {
    res.render("matematica");
  }
}

module.exports = MateriasController;
