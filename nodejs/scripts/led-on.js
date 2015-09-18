var GPIO = require('onoff').Gpio,
    led = new GPIO(17, 'out');
    led.writeSync(1);