const express = require('express')
const app = express()
const PORT = 3001;
const routes = require('./routes/routes')


//Cors, permisos
app.use(require('cors')())


//Rutas, empiezan con /api
app.use('/api', routes)


//Listen
app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
)
