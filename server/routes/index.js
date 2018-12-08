const potential_investments_controller = require('../controllers').potential_investments;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/potential_investments', potential_investments_controller.create);
};
