let mongoose = require('mongoose')

module.exports.connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connect To Database Successfully");
    } catch (error) {
        console.log("Connection Failed");
        process.exit(1)
    }
}