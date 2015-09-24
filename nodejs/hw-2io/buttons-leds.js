// author: adam mcbride
// with code from: ayo okunseinde

// this is a simple script that watches two buttons for activity
// and when they're pressed, it lights a corresponding button for each

//////////////define the callback function/////////////////
var GPIO = require('onoff').Gpio,
    led1 = new GPIO(17, 'out'),
    button1 = new GPIO(4, 'in', 'both');
    led2 = new GPIO(22, 'out'),
    button2 = new GPIO(23, 'in', 'both');


function lightA(err, state) {
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led1.writeSync(1);
  } else {
    // turn LED off
    led1.writeSync(0);
  }
  
}

function lightB(err, state) {
  
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on
    led2.writeSync(1);
  } else {
    // turn LED off
    led2.writeSync(0);
  }
  
}

// pass the callback function to the
// as the first argument to watch()
button1.watch(lightA);
button2.watch(lightB);