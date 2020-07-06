let {io} = require('../server.js');

io.on('connection', (client) => {
  console.log('usuario conectado');

  client.emit('enviarMensaje', {
    usuario: 'administrador',
    mensaje: 'Bienvenido a esta applicacion'
  });

  client.on('disconnect', () => {
      console.log('usuario desconectado');
  });

  // Escuchar al cliente
  client.on('enviarMensaje',(data, callback) => {
    console.log(data);
    client.broadcast.emit('enviarMensaje', data);
    // if(mensaje.usuario) {
    //   callback({
    //     resp: 'Todo salio BIEN'
    //   });
    // } else {
    //   callback({
    //     resp: 'Todo salio MAL'
    //   });
    // }


  })

});
