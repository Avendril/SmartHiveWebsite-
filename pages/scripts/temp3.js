
var socket = io.connect('http://localhost:5000');
  socket.on('connect', function () {
    socket.on('mqtt', function (msg) {
      var elmarr=msg.topic.split("/");
      var elm=elmarr[3];
  document.getElementById("txtArea").style.overflow = "auto";
  $('#txtArea').append("\n" + msg.payload);
      console.log(msg.payload);
      $('#'.concat(elm)).html(msg.payload);
   });
   socket.emit('subscribe',{topic:'SmartHive/Temperature3'});
  });