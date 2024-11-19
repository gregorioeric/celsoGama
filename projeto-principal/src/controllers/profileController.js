module.exports = class ProfileController {
  static async getProfile(req, res) {
    const getUserProfile = req.session.userProfile;

    res.render("profile", {
      userProfile: getUserProfile,
    });
  }

  static async postProfile(req, res) {
    res.redirect("/profile");
  }
};
