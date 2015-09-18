#!/usr/bin/env python

#### UNREAD-EMAIL #####
# This script checks for unread email, reports the number of unread email, 
# and then displays the sender's name, date sent, email address, and a 
# summary of the email(s)

# Author: Adam McBride
# with code from Ayo Okunseinde
# with code modified from http://elinux.org/RPi_Email_IP_On_Boot_Debian
# with code modified from Don Southard


import feedparser		# imports feedparser to parse XML feed
import time				# imports time
import os 				# imports os functions

from email.mime.text import MIMEText	# imports email MIME functions
import smtplib							# imports the SMTP library
import socket							# imports the socket functions

user = 'XXXXXXX'		# gmail username
passwd = 'XXXXXXX'		# gmail password
repeatdelay = 60		# the delay, in seconds, between each check
loopcount = 0			# the number of times this script has looped on each execution
sendreport = "yes"		# toggle for sending and email report

while True: 	#loop forever ---- to exit use keys "ctr+c"
    newmails = int(feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom")["feed"]["fullcount"])
    newmailentries = feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom").entries
    containsipinfo = 'no'  	# a variable determining whether or not ip info is contained in the evaluated data
    reportmsg = "* There are no unread emails containing IP information about your RaspberryPI *"
    
    os.system("clear")	# make it nice and clean

    # set it up with a nice header so the user knows what s/he is looking at

    print str("\033[1m" + "\n------------------------\n")
    print str("This script checks the account " + str(user) + " for unread emails.")
    print str("Checking for unread email..." + "\033[0m")

    # defining the main functions

    def emailcount(n): #define function emailcount
        if n == 1: # if you have 1 new email
            print "There is "+str(n)+" unread email. Listing it now... \n"
        elif n > 1: # if you have more than one new email
        	print "There are " + str(n) + " unread emails. Listing them now... \n"
        else: # otherwise (if you have no new email)
            print "There are no unread emails. \n"

    def emailcontent(i): #define function emailcontent
    	for i in newmailentries:
			print str("\033[7m" + "From: " + i.author_detail.name + " (" + i.author_detail.email + ")")
			print str("Date: " + i.date)
			print str("Subject: " + i.title)
			print str("Summary:" + "\033[0m " + i.summary + "... \n")

	# function calls

    emailcount(newmails) # call emailcount function and pass value newmails as agrument
    emailcontent(newmailentries) # call emailcontent function and pass newmailentries as argument

    loopcount=loopcount+1 # increases the loop count by 1 each time the script loops

    for i in newmailentries: # this determines if any email contains a specific subject title
        if str(i.title)=="IP For RaspberryPi":
        	containsipinfo = 'yes'

    # this conditional lets me know if one of the emails has IP info about my rPi

    if containsipinfo == 'yes':
        print str("\n" + "\033[4m" + "* At least one email contains IP information about your RaspberryPI *" + "\033[0m" "\n")
        reportmsg = str("* At least one email contains IP information about your RaspberryPI *" + "\n")

    # this conditional sends an email report of the information to the account

    if sendreport == "yes":
	    smtpserver = smtplib.SMTP('smtp.gmail.com', 587)
	    smtpserver.ehlo()
	    smtpserver.starttls()
	    smtpserver.ehlo
	    smtpserver.login(user, passwd)
	    msg = MIMEText("You have " + str(newmails) + " unread email(s)." + "\n" + str(reportmsg) + "This script has run " + str(loopcount) + " time(s) and will repeat every " + str(repeatdelay) + " seconds.\n")
	    msg['Subject'] = 'Unread Email Report'
	    msg['From'] = user
	    msg['To'] = user
	    smtpserver.sendmail(user, [user], msg.as_string())
	    smtpserver.quit()
	    print str("A report has been emailed to " + str(user) + "\n")

    print str("\033[2m" + "This script has run " + str(loopcount) + " time(s).") # displays the amount of times this script has looped
    print str("This script will run every " + str(repeatdelay) + " seconds...") # informs the unser of the dekay between loops
    print str("To terminate this script, press Ctrl+C" + "\033[0m") # gives the user instructions on how to terminate the script
    print str("\033[1m" + "\n------------------------\n" + "\033[0m")

    time.sleep(repeatdelay)		#wait as defined above

