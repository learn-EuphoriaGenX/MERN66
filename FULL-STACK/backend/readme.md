- npm init / npm init -y
- npm install express cors mongoose jsonwebtoken razorpay
# common js(server) - let ... = require(...)
# module js(react) - import ... from ...

- config     -> DB / razorpay configuration
- controller -> All Business Logic
- models     -> Table / schema Structure
- routes     -> Path / API / routes

- npm i nodemon -g (-g for global installation)
- "dev": "nodemon --env-file=.env app.js" -> npm run dev
- http://localhost:5000/hello