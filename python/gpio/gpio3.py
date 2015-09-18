#!/usr/bin/env python

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7,GPIO.IN)

#detects pressing a button on the breadboard, but only outputs 
#info if there is a buttonpress
prev_input=0
while True:
	input=GPIO.input(7)
	if ((not prev_input) and input):
		print("Button Pressed")
	prev_input=input
	time.sleep(0.05)
GPIO.cleanup