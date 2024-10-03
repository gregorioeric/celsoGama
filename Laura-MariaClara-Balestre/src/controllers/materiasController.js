class MateriasController {
  static async getMaterias(req, res) {
    res.render("materias");
  }

  static async getMateriaEducacaoFisica(req, res) {
    res.render("educacaoFisica");
  }
}

module.exports = MateriasController;
