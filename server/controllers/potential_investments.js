const potential_investments = require('../models').potential_investment;
var equations = require('../../utils/housing_equations');

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
      location: params.location,
      gpi: params.gpi,
      vac: params.vac,
      egi: params.egi,
    };

    potential_investments.findOne({ where: {url: params.url} }).then(pi => {
      if(pi == null){
        return potential_investments
          .create(data_to_save)
          .then(potential_investments => res.status(201).send(potential_investments))
          .catch(error => res.status(400).send(error));
      } else {
        return res.status(202).send({message: "Did not create: " + params.url})
      }
    })
  },
};
