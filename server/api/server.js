const express = require('express');
const { sequelize } = require('./models');
const port = process.env.port || 3000;
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app);

app.listen(port, () => {
  sequelize.authenticate().then(() => {
    ('DB connection successfull');
  });

  sequelize.sync({ force: true }).then(() => {
    `Connecting port ${port}`;
  });
}); 