const potential_investments_controller = require('../controllers').potential_investments;
var equations = require('../../utils/housing_equations');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: equations.calculate_gpi([ {number_of_units: 4, rent_per_unit: 200} ]),
  }));

  app.post('/api/potential_investments', potential_investments_controller.create);
};
