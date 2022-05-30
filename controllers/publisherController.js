const PublisherModel = require("../models/Publisher");
module.exports = {
  getPublisher: (req, res) => {
    const id = req.params.id;
    PublisherModel.findById(id, (err, Publisher) => {
      if (!Publisher) {
        return res.status(500).json({ message: "Publisher not found" });
      } else {
        if (err) {
          return res.status(500).json({ message: err });
        }
        return res.status(200).json({ Publisher: Publisher });
      }
    });
  },

  createPublisher: (req, res) => {
    const { name, creation_date } = req.body;
    const Publisher = new PublisherModel({ name, creation_date });

    Publisher.save((err, Publisher) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "succes",
          Publisher: Publisher,
        });
      }
    });
  },

  editPublisher: (req, res) => {
    const id = req.params.id;
    const update = req.params.up;
    PublisherModel.findByIdAndUpdate(
      id,
      { [update]: req.body.update },
      (err, Publisher) => {
        if (!Publisher) {
          return res.status(500).json({ message: "Publisher not found" });
        } else {
          if (err) {
            return res.status(500).json({ message: err });
          }
          return res.status(200).json("Update done!");
        }
      }
    );
  },

  rmPublisher: (req, res) => {
    const id = req.params.id;
    PublisherModel.findByIdAndRemove(id, (err, publisher) => {
      if (!publisher) {
        return res.status(500).json({ message: "publisher not found" });
      } else {
        if (err) {
          return res.status(500).json({ message: err });
        }
        return res.status(200).json({ publisher: publisher });
      }
    });
  },
};
