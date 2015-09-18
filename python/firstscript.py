#!/usr/bin/env python

while True:
	x=int(raw_input("Enter a number: "))

	if x<0:
		print "Negative number"
	elif x==0:
		print "Number is 0"
	elif x==1:
		print "Number is 1"
	else:
		print "Other"
