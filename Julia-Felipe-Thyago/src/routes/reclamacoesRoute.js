const express = require("express");
const storage = require("../middlewares/uploadImageMiddleware");
const multer = require("multer");
const ReclamacoesController = require("../controllers/reclamacoesController");

const reclamacoesRoute = express.Router();
const upload = multer({ storage: storage });
// const uploadCreate = multer({ storage: storage });
// const uploadEdit = multer({ storage: storage });

reclamacoesRoute.get("/", ReclamacoesController.getReclamacoes);

reclamacoesRoute.post(
  "/:id",
  upload.single("user_img_profile"),
  ReclamacoesController.updateUserReclamacoes
);

reclamacoesRoute.get(
  "/createPostReclamacoes",
  ReclamacoesController.getCreatePostReclamacoes
);

reclamacoesRoute.post(
  "/createPostReclamacoes/:id",
  upload.single("user_img_profile"),
  ReclamacoesController.createPostReclamacoes
);

reclamacoesRoute.get(
  "/listPostsReclamacoes",
  ReclamacoesController.getListPostsReclamacoes
);

reclamacoesRoute.get(
  "/editPostReclamacoes/:id",
  ReclamacoesController.getEditPostReclamacoes
);

reclamacoesRoute.post(
  "/editPostReclamacoes/:id",
  upload.single("user_img_profile"),
  ReclamacoesController.postEditPostReclamacoes
);

reclamacoesRoute.post(
  "/deletePost/:id",
  ReclamacoesController.deletePostReclamacoes
);

module.exports = reclamacoesRoute;
