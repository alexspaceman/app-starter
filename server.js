// GLOBALS
const express = require('express')

const app = express()

const router = express.Router()

const port = process.env.PORT || 80


// MIDDLEWARE
router.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})


// ROUTES
// index
router.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded index')
    }
  })
})

router.get('/bundle.js', (req, res) => {
  res.sendFile('./bundle.js', { root: __dirname }, (err) => {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    }
    else {
      console.log('loaded bundle.js')
    }
  })
})


// USER ROUTER
app.use('/', router)


// START THE SERVER
app.listen(port)
console.log(`listening on port ${port}`)