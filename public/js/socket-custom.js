var socket = io();
// Escuchar
socket.on('connect', function() {
  console.log('conectado al servidor');
});
socket.on('disconnect', function() {
  console.log('coneccion perdida');
});
// Emitir
socket.emit('enviarMensaje', {
  usuario: 'jesus',
  mensaje: 'hola'
}, function(respuesta) {
  console.log('respuesta servidor: ', respuesta);
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
  console.log('Servidor: ', mensaje);
});
