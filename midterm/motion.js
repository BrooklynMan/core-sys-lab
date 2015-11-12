var Gpio = require('onoff').Gpio,
  pir = new Gpio(4, 'in', 'both');
 


pir.watch(function(err, value) {
  if (err) exit();
  console.log('Motion detected');
});
 
console.log('PIR motion sensor activated...');
 
function exit() {
  pir.unexport();
  process.exit();
}