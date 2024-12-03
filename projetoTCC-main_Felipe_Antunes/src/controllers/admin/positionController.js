module.exports = class PositionController {
    static async getPosition(req,res) {
        const adminUser = req.session.adminUser;
        const results = await PositionModel.selectAllPosition();
        return res.render("position", {
            msgError: req.query.msgError,
            msgSuccess: req.query.msgSuccess,
            position: results,
            adminUser,
        });
    }
    
    static async postPositionPage(req,res) {
        const { position_name } = req.body;

        if (!position_name) {
            return res.redirect ();
        }

    const result = await PositionPageModel.insertPosition(position_name);
    console.log(result);

    return res.redirect();
}
    static async postPosition(req,res){
        const { position_name } = req.body;

        if (!position_name) {
            return res.redirect();
        }

    const position = {
        position_name,
    };

    console.log(position);
    
    const result = await positionModel.insertPosition(position);
    console.log(result);

    return res.redirect()
    
}

}

