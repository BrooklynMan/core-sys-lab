#!/usr/bin/env python

# Author: Adam McBride
# with code from Ayo Okunseinde

import feedparser
import time

user='XXXXX'
passwd='XXXXX'

newmails = feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom").entries
for i in newmails:
	# if str(i.title)=="Google Alert - Conceptual art";
	print str(i.title)


#######################################################