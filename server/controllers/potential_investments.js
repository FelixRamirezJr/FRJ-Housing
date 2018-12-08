const potential_investments = require('../models').potential_investment;

module.exports = {
  create(req, res) {
    let data_to_save = {
      source: req.body.source,
      pricing: req.body.pricing,
      location: req.body.location,
    };
    return potential_investments
      .create(data_to_save)
      .then(potential_investments => res.status(201).send(potential_investments))
      .catch(error => res.status(400).send(error));
  },
};
