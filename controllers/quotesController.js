const db = require("../config/connection");

exports.getAllQuotes = (req, res) => {
  const query = "SELECT * from quotes";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Failed to fetch quotes",
        error: err.message,
      });
    }

    res.status(200).json({
      status: "success",
      quotes: results,
    });
  });

  db.end;
};

exports.getQuoteByCategory = (req, res) => {
  const category_id = req.query.category_id * 1;

  const query = `SELECT * FROM quotes WHERE category_id = ${category_id}`;
  const category = `SELECT * FROM quotes_categories WHERE id = ${category_id}`;
  console.log(category);

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Failed to fetch quotes",
        error: err.message,
      });
    }

    res.status(200).json({
      status: "success",
      category,
      quote: result,
    });
  });
};
