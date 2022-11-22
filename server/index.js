require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const app = express()
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

//end milldeware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started at ${PORT}`))
    } catch (e) {
        console.log(e)
    }

}

start()
