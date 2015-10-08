

#include <RFduinoGZLL.h>

device_t role = DEVICE2;

// pin for the Green Led
int LEDpin = 4;
int LEDpin2 = 3;

int xpin = 2;
int ypin = 4;

int xval = 0;
int yval = 0;

int xvalp = 0;
int yvalp = 0;

double x;
double y;




void setup()
{
  Serial.begin(9600);
  pinMode(LEDpin, OUTPUT);
  pinMode(LEDpin2, OUTPUT);
  pinMode(xpin, INPUT);
  pinMode(ypin, INPUT);
  RFduinoGZLL.txPowerLevel = 0;
  // start the GZLL stack
  RFduinoGZLL.begin(role);
}

void loop()
{
  char xdata[2];   //declaring character array
  char mydata[2];

  char ydata[4];
  char mydata2[4];
  
  String xstr;
  String mystr;

  String ystr;
  String mystr2;
  
  xval = digitalRead(xpin);
  yval = digitalRead(ypin);

  xstr = String(xval);
  ystr = String(yval + 2);

  xstr.toCharArray(xdata, 2); //passing the value of the string to the character array
  ystr.toCharArray(ydata, 4);
  
  mystr = xstr;
  mystr.toCharArray(mydata, 2);

  mystr2 = ystr;
  mystr2.toCharArray(mydata2, 4);
  
  Serial.println(mydata);
  Serial.println(mydata2);
  RFduinoGZLL.sendToHost(mydata, 2);
  RFduinoGZLL.sendToHost(mydata2, 4);
  delay(50);
}

