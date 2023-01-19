const express = require('express')
const app = express()

//1. CREAMOS UNA CLASE

class Server {
  constructor() {
    this.app = express()
    this.port = 3000

    this.routes()
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.send('Hola Mundo')
    })
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('server is running on port', this.port)
    })
  }
}

//2.EXPORTAMOS EL SERVIDOR

module.exports = Server