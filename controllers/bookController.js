const BookModel = require("../models/Book");
module.exports = {
  getBook: (req, res) => {
    const id = req.params.id;
    BookModel.findById(id, (err, Book) => {
      if (!Book) {
        return res.status(500).json({ message: "Book not found" });
      } else {
        if (err) {
          return res.status(500).json({ message: err });
        }
        return res.status(200).json({ Book: Book });
      }
    });
  },

  createBook: (req, res) => {
    const { title, description, publication_date, author, publisher } =
      req.body;
    const Book = new BookModel({
      title,
      description,
      publication_date,
      author,
      publisher,
    });

    Book.save((err, Book) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "succes",
          Book: Book,
        });
      }
    });
  },

  editBook: (req, res) => {
    const id = req.params.id;
    const update = req.params.up;
    BookModel.findByIdAndUpdate(
      id,
      { [update]: req.body.update },
      (err, Book) => {
        if (!Book) {
          return res.status(500).json({ message: "Book not found" });
        } else {
          if (err) {
            return res.status(500).json({ message: err });
          }
          return res.status(200).json("Update done!");
        }
      }
    );
  },

  rmBook: (req, res) => {
    const id = req.params.id;
    BookModel.findByIdAndRemove(id, (err, Book) => {
      if (!Book) {
        return res.status(500).json({ message: "Book not found" });
      } else {
        if (err) {
          return res.status(500).json({ message: err });
        }
        return res.status(200).json({ Book: Book });
      }
    });
  },
};
