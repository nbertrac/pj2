const AuthorModel = require("../models/Author");
module.exports = {
  getAuthor: (req, res) => {
    const id = req.params.id;
    AuthorModel.findById(id, (err, author) => {
      if (!author) {
        return res.status(500).json({ message: "author not found" });
      } else {
        if (err) {
          return res.status(500).json({ message: err });
        }
        return res.status(200).json({ author: author });
      }
    });
  },

  createAuthor: (req, res) => {
    const { firstname, lastname, age } = req.body;
    const Author = new AuthorModel({ firstname, lastname, age });

    Author.save((err, author) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "succes",
          author: author,
        });
      }
    });
  },

  editAuthor: (req, res) => {
    const id = req.params.id;
    const update = req.params.up;
    AuthorModel.findByIdAndUpdate(
      id,
      { [update]: req.body.update },
      (err, author) => {
        if (!author) {
          return res.status(500).json({ message: "author not found" });
        } else {
          if (err) {
            return res.status(500).json({ message: err });
          }
          return res.status(200).json("Update done!");
        }
      }
    );
  },

  rmAuthor: (req, res) => {
    const id = req.params.id;
    AuthorModel.findByIdAndRemove(id, (err, author) => {
      if (!author) {
        return res.status(500).json({ message: "author not found" });
      } else {
        if (err) {
          return res.status(500).json({ message: err });
        }
        return res.status(200).json({ author: author });
      }
    });
  },
};
