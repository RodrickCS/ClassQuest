const multer = require("multer");

const generateRandomString = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
  }
  return randomString;
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:/Users/Desenvolvimento/Desktop/ClassQuest/Docs/blob");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      `${(file.originalname = Buffer.from(file.originalname, "latin1").toString(
        "utf-8"
      ))}`
    );
  },
});

const parser = multer({ storage });

const enviarArquivo = async (req, res) => {
  parser.single("img")(req, res, (err) => {
    if (err) res.status(500).json({ error: 1, payload: err }).end();
    else {
      res.status(200).json(req.file.filename).end();
    }
  });
};

module.exports = {
  enviarArquivo,
};
