#!/usr/bin/env python

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7,GPIO.IN)

#detects pressing a button on the breadboard
while True:
	input=GPIO.input(7)
	print input
