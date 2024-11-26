module.exports = class MateriasController {
  static async getMaterias(req, res) {
    return res.render("materias");
  }

  static async getMateriaEducacaoFisica(req, res) {
    return res.render("educacao-fisica");
  }

  static async getMateriaTecnologiasdaInformacaoeComunicacao(req, res) {
    return res.render("tecnologias-da-informacao-e-comunicacao");
  }
  static async getMateriaArtes(req, res) {
    return res.render("artes");
  }
  static async getMateriaHistoria(req, res) {
    return res.render("historia");
  }
  static async getMateriaGeografia(req, res) {
    return res.render("geografia");
  }
  static async getMateriaFilosofia(req, res) {
    return res.render("filosofia");
  }
  static async getMateriaSociologia(req, res) {
    return res.render("sociologia");
  }
  static async getMateriaBiologia(req, res) {
    return res.render("biologia");
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
