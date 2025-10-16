const express = require('express')
let app = express() // object instanciate

app.get("/", (req, res) => {
    return res.send({ message: "hello from backend", success: true })
}) 

const userRoute = require('./src/routes/user.routes')
app.use("/user", userRoute)


app.listen(process.env.PORT, () => {
    console.log(`Server Connected on port ${process.env.PORT}`);
})

