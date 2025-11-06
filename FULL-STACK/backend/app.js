const express = require('express')
let app = express() // object instanciate
const { connectToDb } = require('./src/config/db.config')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    return res.send({ message: "hello from backend", success: true })
})

const userRoute = require('./src/routes/user.routes')
app.use("/user", userRoute)
const wishlistRoute = require('./src/routes/wishlist.route')
app.use("/wishlist", wishlistRoute)


connectToDb()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Connected on port ${process.env.PORT}`);
        })
    })

