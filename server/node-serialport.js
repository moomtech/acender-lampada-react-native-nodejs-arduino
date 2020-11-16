/*
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

int temp;

void loop() {
  temp = (5 * 1 + 2);
  Serial.println(temp);  // prints a label
  delay(2000);
}
*/


const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('/dev/cu.usbserial-RCBB_3RXXVB')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', console.log)