const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/list", (req, res, next) => {
  User.find({ email: req.body.email })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
