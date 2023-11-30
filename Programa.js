const usuario = require('./Usuario.js');
const notificaciones = require('./Notificaciones.js');
const mensaje = require('./Mensajes.js');

const Notificaciones = new notificaciones();
const Francisco = new usuario(1,'Francisco' , 'Vallone' , 27 , Notificaciones);
const Franco = new usuario(2,'Francisco' , 'Vallone' , 27 , Notificaciones);
const Mami = new usuario(3,'Mami' , 'Vallone' , 54 ,Notificaciones);

Francisco.enviarMensaje(Mami.id,'Hola Mami','urgente','chat');
Francisco.enviarMensaje([Mami.id,Franco.id],'como estuvo tu dia?','urgente','chat');

// Notificaciones.enviarMensaje(new mensaje(null,[],'esto es un mensaje general','urgente','chat'));
Mami.verNotificaciones();

setTimeout(function(){
    console.log("Hola Mundo1");
    console.log(Notificaciones.mostrarMensajes('chat'));
}, 1000);
// setTimeout(function(){
//     console.log("Hola Mundo2");
//     console.log(Notificaciones.mostrarMensajes('chat').length);
// }, 120000);

console.log('FIN',Notificaciones.listadoUsuarioNotificar.length)
