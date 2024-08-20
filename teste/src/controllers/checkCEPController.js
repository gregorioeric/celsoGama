module.exports = class CheckCEPController {
  static async getCEP(req, res) {
    return res.render("checkCEP", { message: "" });
  }

  static async postCEP(req, res) {
    const { user_cep } = req.body;
    const clearCEP = user_cep.replace(/\D+/g, "");

    if (!user_cep) {
      req.message = {
        msgCEP: "Por gentileza, informe um CEP válido!",
      };
      return res.render("checkCEP", { message: req.message });
    }

    const request = await fetch(`https://viacep.com.br/ws/${clearCEP}/json/`);
    const response = await request.json();

    if (!response.cep) {
      req.message = {
        msgCEP: "Ohhhh Amigão esse CEP que você informou é inválido!",
      };
      return res.render("checkCEP", { message: req.message });
    }

    req.message = {
      msgCEP: "Amigão ou Amigona seu CEP é válido!",
    };
    return res.render("checkCEP", { message: req.message });
  }
};
