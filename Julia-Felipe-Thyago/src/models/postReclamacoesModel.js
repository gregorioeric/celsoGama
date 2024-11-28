const database = require("../database/database");

module.exports = class PostReclamacoesModel {
  static async selectAllPosts() {
    const selectAllPost = "SELECT * FROM post_reclamacoes;";
    const [result] = await database.query(selectAllPost);

    return result;
  }

  static async selectPostById(post_id) {
    const selectPostById =
      "SELECT * FROM post_reclamacoes WHERE post_reclamacoes_id = ?;";
    const [[result]] = await database.query(selectPostById, [post_id]);

    return result;
  }

  static async insertPost(post) {
    const {
      post_reclamacoes_title,
      post_reclamacoes_bairro,
      post_reclamacoes_cidade,
      post_reclamacoes_uf,
      post_reclamacoes_content,
      post_reclamacoes_slug,
      users_user_id,
      post_reclamacoes_img,
    } = post;
    const insertPost = `INSERT INTO post_reclamacoes(
        post_reclamacoes_title,
        post_reclamacoes_bairro,
        post_reclamacoes_cidade,
        post_reclamacoes_uf,
        post_reclamacoes_content,
        post_reclamacoes_slug,
        users_user_id, 
        post_reclamacoes_img)
      VALUES
        (?, ?, ?, ?, ?, ?, ?, ?);`;
    const [result] = await database.query(insertPost, [
      post_reclamacoes_title,
      post_reclamacoes_bairro,
      post_reclamacoes_cidade,
      post_reclamacoes_uf,
      post_reclamacoes_content,
      post_reclamacoes_slug,
      users_user_id,
      post_reclamacoes_img,
    ]);

    return result;
  }

  static async updatePost(post_reclamacoes_id, post) {
    const {
      post_reclamacoes_title,
      post_reclamacoes_bairro,
      post_reclamacoes_cidade,
      post_reclamacoes_uf,
      post_reclamacoes_content,
      post_reclamacoes_slug,
      post_reclamacoes_img,
    } = post;
    const updatePost = `UPDATE post_reclamacoes SET 
          post_reclamacoes_title = ?, 
          post_reclamacoes_bairro = ?, 
          post_reclamacoes_cidade = ?,
          post_reclamacoes_uf = ?,
          post_reclamacoes_content = ?,
          post_reclamacoes_slug = ?,
          post_reclamacoes_img = ?
      WHERE 
          post_reclamacoes_id = ?;`;
    const [result] = await database.query(updatePost, [
      post_reclamacoes_title,
      post_reclamacoes_bairro,
      post_reclamacoes_cidade,
      post_reclamacoes_uf,
      post_reclamacoes_content,
      post_reclamacoes_slug,
      post_reclamacoes_img,
      post_reclamacoes_id,
    ]);

    return result;
  }

  static async deletePost(post_reclamacoes_id) {
    const deletePost =
      "DELETE FROM post_reclamacoes WHERE post_reclamacoes_id = ?;";
    const [result] = await database.query(deletePost, [post_reclamacoes_id]);

    return result;
  }

  static async selectJoinAllPosts() {
    const selectJoin = `SELECT 
            u.user_id,
            u.user_name,
            u.user_email,
            pr.post_reclamacoes_id,
            pr.post_reclamacoes_title,
            pr.post_reclamacoes_bairro,
            pr.post_reclamacoes_cidade,
            pr.post_reclamacoes_uf,
            pr.post_reclamacoes_content,
            pr.post_reclamacoes_date,
            pr.post_reclamacoes_img
        FROM 
            users u
        INNER JOIN 
            post_reclamacoes pr
        ON 
            u.user_id = pr.users_user_id
        ORDER BY 
            pr.post_reclamacoes_date DESC;`;
    const [result] = await database.query(selectJoin);

    return result;
  }

  static async selectJoinAllPostsById(post_reclamacoes_id) {
    const selectJoin = `SELECT 
            u.user_id,
            u.user_name,
            u.user_email,
            pr.post_reclamacoes_id,
            pr.post_reclamacoes_title,
            pr.post_reclamacoes_bairro,
            pr.post_reclamacoes_cidade,
            pr.post_reclamacoes_uf,
            pr.post_reclamacoes_content,
            pr.post_reclamacoes_date,
            pr.post_reclamacoes_img
        FROM 
            users u
        INNER JOIN 
            post_reclamacoes pr
        ON 
            u.user_id = pr.users_user_id
        ORDER BY 
            pr.post_reclamacoes_date DESC
        WHERE 
            u.user_id = ?;`;
    const [result] = await database.query(selectJoin, [post_reclamacoes_id]);

    return result;
  }
};
