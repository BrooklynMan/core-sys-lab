#!/usr/bin/env python

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(11,GPIO.OUT)

#blinking
def blink(pin):
	GPIO.output(pin,GPIO.HIGH)
	time.sleep(1)
	GPIO.output(pin,GPIO.LOW)
	time.sleep(1)
	return

#ask for blink count
x=int(raw_input("Enter a blink count: "))

#blink
for i in range (0,x):
	blink(11)
GPIO.cleanup()