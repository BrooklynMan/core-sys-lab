// Author: Adam McBride
// with code from Ayo Okunseinde

var gpio = require('rpi-gpio');

function write() {
    gpio.write(11, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}

gpio.setup(11, gpio.DIR_OUT, write);

