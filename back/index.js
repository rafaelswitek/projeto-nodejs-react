const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const Tables = require('./infra/tables')

connection.connect(error => {
    if (error) {
        throw new Error(error)
    }

    Tables.init(connection)

    const app = customExpress()

    app.listen(3001, () => {
        console.log("Rodando...")
    })
})