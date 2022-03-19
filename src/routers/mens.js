const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const record = new MensRanking(req.body);
    const uData = await record.save();
    res.status(201).send(uData);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/mens/:id", async (req, res) => {
  try {
    const record = await MensRanking.findById(req.params.id);
    res.status(201).send(record);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/mens", async (req, res) => {
  try {
    const record = await MensRanking.find().sort({ ranking: 1 });
    res.status(201).send(record);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const record = await MensRanking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).send(record);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/mens/:id", async (req, res) => {
  try {
    const uData = await MensRanking.findByIdAndDelete(req.params.id);
    res.status(200).send(uData);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
