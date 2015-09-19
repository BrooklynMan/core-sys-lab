#!/usr/bin/env python

# Author: Adam McBride
# with code from Ayo Okunseinde

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7,GPIO.IN)

#detects pressing a button on the breadboard
while True:
	input=GPIO.input(7)
	print input
