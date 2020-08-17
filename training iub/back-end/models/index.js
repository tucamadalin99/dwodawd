const db = require("../config/db");
const Formular = db.import("./formular");

module.exports = {
  connection: db,
  Formular,
};
