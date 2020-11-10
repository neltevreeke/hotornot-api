const socketIo = require('socket.io')

let io = null

const dispatchEvent = (type, data) => {
  io
    .emit('event-receive', JSON.stringify({
      type,
      data
    }))
}

function initSocketServer (server) {
  io = socketIo(server, {
    cors: {
      origin: 'http://localhost:3000',
      credentials: true
    }
  })

  io.on('connect', (socket) => {
    console.log('server connection established')

    socket.on('disconnect', () => {
      console.log('server connection disconnected')
    })

    socket.on('event', (event) => {
      console.log(event)
    })
  })
}

module.exports = {
  dispatchEvent,
  initSocketServer
}
