const PostReclamacoesModel = require("../models/postReclamacoesModel");
const RegisterUserModel = require("../models/registerUserModels");

module.exports = class ReclamacoesController {
  static async getReclamacoes(req, res) {
    const userProfile = req.session.userProfile;

    const result = await RegisterUserModel.getUserByEmail(
      userProfile.user_email
    );
    return res.render("reclamacoes", {
      user: result,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async updateReclamacoes(req, res) {
    const { user_name, user_email } = req.body;
    const user_id = Number(req.params.id);
    const result = await RegisterUserModel.getUserByEmail(user_email);
    let user_img_profile = "";

    if (!result.user_img_profile && !req.file) {
      user_img_profile = "";
    }

    if (result.user_img_profile && !req.file) {
      user_img_profile = result.user_img_profile;
    }

    if (req.file) {
      user_img_profile = `/${req.file.filename}`;
    }

    const updateUser = {
      user_name,
      user_email,
      user_img_profile,
    };

    const setUpdate = await RegisterUserModel.updateUserProfile(
      user_id,
      updateUser
    );

    if (!setUpdate) {
      return res.redirect(
        "/reclamacoes?msgError=Não foi possivel atualizar o perfil!"
      );
    }

    req.session.logged = true;
    req.session.user = result;

    return res.redirect(
      "/reclamacoes?msgSuccess=Perfil atualizado com sucesso!"
    );
  }

  static async getCreatePostReclamacoes(req, res) {
    const userProfile = req.session.userProfile;
    const result = await RegisterUserModel.getUserByEmail(
      userProfile.user_email
    );
    return res.render("createPostReclamacoes", {
      user: result,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async createPostReclamacoes(req, res) {
    const {
      post_reclamacoes_title,
      post_reclamacoes_bairro,
      post_reclamacoes_cidade,
      post_reclamacoes_uf,
      post_reclamacoes_content,
    } = req.body;

    const user_id = req.params.id;
    const post_reclamacoes_slug = post_reclamacoes_title.replace(/\s+/g, "-");

    const getuser = await RegisterUserModel.selectUserById(user_id);

    if (!getuser) {
      return res.redirect(
        "/reclamacoes/createPostReclamacoes?msgError=Não foi possivel criar o post, faça login novamente!"
      );
    }

    const post = {
      post_reclamacoes_title,
      post_reclamacoes_bairro,
      post_reclamacoes_cidade,
      post_reclamacoes_uf,
      post_reclamacoes_content,
      post_reclamacoes_slug,
      users_user_id: getuser.user_id,
    };
    console.log(post);

    const result = await PostReclamacoesModel.insertPost(post);

    if (!result) {
      return res.redirect(
        "/reclamacoes/createPostReclamacoes?msgError=Não foi possivel criar o post. Tente novamente!"
      );
    }

    return res.redirect(
      "/reclamacoes/createPostReclamacoes?msgSuccess=Post criado com sucesso!"
    );
  }

  static async getListPostsReclamacoes(req, res) {
    const userProfile = req.session.userProfile;

    const result = await PostReclamacoesModel.selectAllPosts();

    const findPostsById = result.filter(
      (posts) => posts.users_user_id === userProfile.user_id
    );

    console.log(findPostsById);

    return res.render("listPostsReclamacoes", {
      posts: findPostsById,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async getEditPostReclamacoes(req, res) {
    const getPostId = Number(req.params.id);
    const result = await PostReclamacoesModel.selectPostById(getPostId);
    return res.render("editPostReclamacoes", {
      post: result,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }

  static async postEditPostReclamacoes(req, res) {
    const { post_title, post_content } = req.body;
    const getPostId = Number(req.params.id);

    const post_slug = post_title.replace(/\s+/g, "-");

    const post = {
      post_title,
      post_content,
      post_slug,
    };

    const result = await PostReclamacoesModel.updatePost(getPostId, post);

    if (!result) {
      return res.redirect(
        "/reclamacoes/editPostReclamacoes?msgError=Não foi possivel atualizar o post. Tente novamente!"
      );
    }

    return res.redirect(
      "/reclamacoes/listPostsReclamacoes?msgSuccess=Post Atualizado com Sucesso!"
    );
  }

  static async deletePostReclamacoes(req, res) {
    const getPostId = Number(req.params.id);

    const result = await PostReclamacoesModel.deletePost(getPostId);

    if (!result) {
      return res.redirect(
        "/reclamacoes/editPostReclamacoes?msgError=Não foi possivel atualizar o post. Tente novamente!"
      );
    }

    return res.redirect(
      "/reclamacoes/listPostsReclamacoes?msgSuccess=Post Deletado com Sucesso!"
    );
  }
};
