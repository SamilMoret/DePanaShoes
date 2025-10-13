const bodyParser = require('body-parser')
const users = require('./routersUsers')
const productos = require('./routersProducts')

module.exports = app => {
    app.use(
        bodyParser.json(),
        users,
        productos
    )
} 