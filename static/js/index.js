//https://www.eclipse.org/paho/clients/js/

function enviar() {
	message = new Paho.MQTT.Message(document.getElementById("Enviarclave").innerHTML=document.getElementById("lname").value);
    message.destinationName = "joseedwin62@gmail.com/test1";
    client.send(message);
	console.log(document.getElementById("Enviarclave").innerHTML=document.getElementById("lname").value);
  
}
function hist(){	
	document.getElementById("PedirInf").innerHTML="led off";
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "joseedwin62@gmail.com",
    password: "087918693EJCHL-",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("joseedwin62@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "joseedwin62@gmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	if (document.getElementById("lname").value == 1234) {
		document.getElementById("sensor").innerHTML="";
		document.getElementById("sensor").innerHTML=message.payloadString.split(" ")[1];
		document.getElementById("sensor2").innerHTML="";
		document.getElementById("sensor2").innerHTML=message.payloadString.split(" ")[2];
	}
	
		
  }
  
