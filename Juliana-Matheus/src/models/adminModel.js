const database = require('../database/database');

module.exports = class AdminModel{
    static async selectAdminbyEmail (adminEmail){

        const selectAdminEmail = 'SELECT * FROM admin_users WHERE admin_email = ?';
        const [[result]] = await database.query(selectAdminEmail, [adminEmail]);

        return result;
    }
}