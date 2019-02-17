const potential_investments_controller = require('../controllers').potential_investments;
var equations = require('../../utils/housing_equations');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send(
    equations.calculate_all_variables([ {number_of_units: 5, rent_per_unit: 450} ])
  )
);

  app.post('/api/potential_investments', potential_investments_controller.create);  
};
