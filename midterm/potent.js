//require onoff to get access to gpios
var gpio = require('onoff').Gpio;

 //require sleep to enable waiting for some time
var sleep = require ('sleep');

  //variable for saving our own-created "analogue" value
var reading = 0;

var Parse= require('node-parse-api').Parse;
var APP_ID="ELmJDjGgDU6VF0q0UPlJTYCqXVWHa8LaLIfvskC2";
var MASTER_KEY = "7V7FXgJmEx6DDOKuOeAJVc8E3GABHKsK1Rjzifrf";
var appParse = new Parse(APP_ID, MASTER_KEY);



//function which always returns one value if the pin changes his value
function RCtime2(pin){


 //set pin to out and value to 0
var sensor = new gpio(0,'out');


 sensor.write(0);
 //wait for 0.1 seconds 
 sleep.usleep(100000);
 //set pin as input 
 sensor=new gpio(17,'in','both');
 //as long as the value of the pin is not reaching state 1 increase 
 //value reading
while(sensor.readSync()==false){
	reading++;}
 //if value of pin is 1, return "analogue" value
return reading;

};

 
while(true){
	//print analogue value
	console.log('potentiometer value: ' + RCtime2(0));
	// INSERT OBJECT
	var potVal = RCtime2(0);
	appParse.insert('ppotVal', { plightVal: potVal }, 
	function (err, response) {
		console.log(response);
	});
 
};