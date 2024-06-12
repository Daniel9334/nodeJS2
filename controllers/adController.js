const Ad = require("../models/ad");

exports.createAd = async (req, res) => {
  try {
    const ad = new Ad(req.body);
    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(400).json({ message: "Error creating ad", error: err.message });
  }
};

exports.getAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    if (!ad) return res.status(404).json({ message: "Ad not found" });

    res.format({
      "application/json": () => res.json(ad),
      "text/plain": () => res.send(ad.toString()),
      "text/html": () =>
        res.send(`<h1>${ad.title}</h1><p>${ad.description}</p>`),
      default: () => res.status(406).send("Not Acceptable"),
    });
  } catch (err) {
    res.status(400).json({ message: "Error fetching ad", error: err.message });
  }
};

exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find();
    res.json(ads);
  } catch (err) {
    res.status(400).json({ message: "Error fetching ads", error: err.message });
  }
};

exports.deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);
    if (!ad) return res.status(404).json({ message: "Ad not found" });

    res.json({ message: "Ad deleted" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting ad", error: err.message });
  }
};

exports.updateAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ad) return res.status(404).json({ message: "Ad not found" });

    res.json(ad);
  } catch (err) {
    res.status(400).json({ message: "Error updating ad", error: err.message });
  }
};

exports.searchAds = async (req, res) => {
  try {
    const criteria = {};
    if (req.query.title) criteria.title = new RegExp(req.query.title, "i");
    if (req.query.description)
      criteria.description = new RegExp(req.query.description, "i");
    if (req.query.minPrice) criteria.price = { $gte: req.query.minPrice };
    if (req.query.maxPrice)
      criteria.price = { ...criteria.price, $lte: req.query.maxPrice };
    if (req.query.minDate)
      criteria.createdAt = { $gte: new Date(req.query.minDate) };
    if (req.query.maxDate)
      criteria.createdAt = {
        ...criteria.createdAt,
        $lte: new Date(req.query.maxDate),
      };

    const ads = await Ad.find(criteria);
    res.json(ads);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error searching ads", error: err.message });
  }
};
