let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.emit('createMessage', {
  from: 'Jakub',
  text: 'Hi. This is Jakub.'
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});

socket.on('disconnect', function () {
  console.log('Disconnect server');
});
