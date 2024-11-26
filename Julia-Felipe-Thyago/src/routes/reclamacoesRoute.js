const express = require("express");
const storage = require("../middlewares/uploadImageMiddleware");
const multer = require("multer");
const ReclamacoesController = require("../controllers/reclamacoesController");

const reclamacoesRoute = express.Router();
const upload = multer({ storage: storage });

reclamacoesRoute.get("/", ReclamacoesController.getReclamacoes);

reclamacoesRoute.post(
  "/:id",
  upload.single("user_img_profile"),
  ReclamacoesController.updateReclamacoes
);

reclamacoesRoute.get(
  "/createPostReclamacoes",
  ReclamacoesController.getCreatePostReclamacoes
);

reclamacoesRoute.post(
  "/createPostReclamacoes/:id",
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
  ReclamacoesController.postEditPostReclamacoes
);

reclamacoesRoute.post(
  "/deletePost/:id",
  ReclamacoesController.deletePostReclamacoes
);

module.exports = reclamacoesRoute;
