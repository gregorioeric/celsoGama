class AdminController {
    static async getAdmin(req, res){
        res.render('admin');
    }
}

module.exports = AdminController;