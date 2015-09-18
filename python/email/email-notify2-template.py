#!/usr/bin/env python

import feedparser
import time

user='XXXXX'
passwd='XXXXX'

newmails = feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom").entries
for i in newmails:
	if str(i.title)=="IP For RaspberryPi":
		print str("From: " + i.author_detail.name + " (" + i.author_detail.email + ")")
		print str("Subject: " + i.title)
		print str("Summary: " + i.summary + "... \n")


#######################################################