const potential_investments = require('../models').potential_investment;

module.exports = {
  create(req, res) {
    let params = req.body;
    let data_to_save = {
      url: params.url,
      price: params.price,
      rooms: params.rooms,
      bathrooms: params.bathrooms,
      address: params.address,
      description: params.description,
      state: params.state,
      city: params.city,
      location: params.location
    };
    return potential_investments
      .create(data_to_save)
      .then(potential_investments => res.status(201).send(potential_investments))
      .catch(error => res.status(400).send(error));
  },
};
