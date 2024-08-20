const fs = require("fs");
const path = require("path");
const multer = require("multer");

const uploadDir = path.join("public", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSufix = new Date().getTime();
    cb(null, `${uniqueSufix}_${file.originalname}`);
  },
});

module.exports = storage;
