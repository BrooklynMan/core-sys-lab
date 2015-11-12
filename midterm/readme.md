# MIDTERM PROJECT: A PARKING SPACE MONITORING DEVICE
## A parking monitor device

### SUMMARY

I created a parking space availability reporting device/system prototype built on the individual level that will later be scaled up for above- and below-groud parking structures. This was done to help address the difficulties with locating a parking space and, later, parking space management in commercial parking structures.

### MOTIVATIONS

Trying to optimize parking efficiency
Avoid frustrations of not finding a parking space
Managing parking space in a commercial parking structures (both above- and below-ground)
Providing air-quality data for below-ground parking structures for optimizing power consumption used for underground ventilation (HVAC)

### CONTEXT

By optimizing this task, time can be saved, frustration avoided, and pollution reduced. By providing site-wide monitoring of parking data as well as motioring of air quailty via built-in sensor data, reducing the amount of power used for ventilation.

### ROADBLOCKS

Initial Cost – reduction to essential technological elements – I would be limited to producing a high-resolution prototype.
Theft – Out-of-reach placement. Went with a conspicuous placement and appearance, making the device a beacon showing parking space availability
Loss of Signal or Power – In a controlled commercial environment, support hardware would be an option for a final product. The prototype can use improvised solutions. Both would use hard-line power. Possible Ethernet over Power.
The initial development tech is expensive and unrefined for this application. The final product would have to be manufactured to spec. This would necessitate a high start-up production cost. For the scope of this project, I will be producing high-resolution prototype hardware and control and reporting software.

### RESEARCH

#### COMPETING SOLUTIONS

Current technologies are geared towards mid- to large-scale commercial applications or rely on crowd-sourced reporting which is ineffective unless widely and frequently used. Only focus on facilities themselves, not individual spaces.
Current option over-complicate with technologies with GPS and other tech that wouldn’t be necessary, as the location of the parking space and monitoring device are known and can be relayed via availability boards at entrances and on each parking level.
Crowd-sourced reporting and GPS-enabled tracking present dangers in distraction from phones while operating a vehicle and looking for parking, plus phone and GPS signal are limited in parking structures.
Current solutions for parking structures require massive investments in installation, and require instillation within the asphalt or concrete of the structure for equipment and reporting systems.
USER NEEDS

Users want to be able to pull into a parking structure and be told where an empty space is.
Users have difficulty finding an empty space from a distance, even if they know an empty space is nearby.
Site operators would like more granular air quality data in order to optimize air quality management in underground structures for more efficient HVAC usage and power utilization (reducing power usage and costs/environmental imparct)

#### AIR QUALITY REGULATIONS

co-regulationsUnderground parking Garages have to use complicated monitoring and ventilations systems (HVAC) with baffling to maintain air quality. Many use no monitoring at all, and have to constantly ventilate, using massive amounts of power.

These parking monitors would allow for more accurate per-zone monitoring of CO levels and allow for more efficient use of HVAC systems, reducing power usage and environmental impact.

### PROJECT EXECUTION

#### HARDWARE

I used a Raspberry Pi 2 B with sensors and wireless connectivity. As development continues, additional inputs/outputs may be added (marking reserved or disabled spaces, additional sensors or indicators, etc.)

PIR Sensor – Initial motion sensor to trigger range sensor
Ultrasonic Sensor – Used to detect range and determine if the space is actually occupied by a car/motorcycle (rather than a person or animal).
CO Sensor – Carbon Monoxide Sensor to monitor air quality
LED Lights – Red, Blue, Green to indicate Open, Occupied, or Disabled parking space
Parse Database – Stores all data (device id, location, occupied duration, local CO level, etc.)
Web Site – For accessing all data (device id, location, occupied duration, local CO level, etc.)

#### SOFTWARE

The Raspberry Pi runs a Debian Linux-based OS and Javascript-generated (nodejs/express) data reporting to a web app interface for multi-platform compatibility, and stores the data in a Parse database. Web app interface was utilized for data reporting.

### MOVING FORWARD

#### ADDRESSING CURRENT PROBLEMS

As was made clear during my presentation, my device did not work. As my sensors took so long to arrive, I did not have the time I needed to get them to work correctly. In order to demonstrate the database, and the required number of inputs and outputs, i used the following components

- potentiometer
- potoresistor
- PIR motion sensor (as mentioned above)

These devices were programmed to report data in NodeJS and store the data in a Parse database. The code can be viewed in the linked GitHub repository (link) as motion.js, photos.js, and potent.js.

The website ran off an express server, and the values were coded to store in a Parse database.


Unfortunately, while the website successfully retrieves the entries, the entries are only mock entries. For some reason, my code was able to make entries while sent from the site, but stopped working when moved to the individual file each sensor value retrieval function was located in. I wasn't able to replicate the send function even though i followed the API instructions. Further assistance is needed here.

### WHAT'S NEXT FOR THE PROJECT

IMG_0468After successfully solving the issues with the inputs from the ultrasonic and carbon monoxide sensors, and solving the Parse entry weirdness, I plan to scale up the project to a site-level installation. Beginning with several devices, based on the RFduino, rather than the Raspberry Pi 2 B, I plan to create mesh network that will connect to a node. That node will then connect to a central server which will then administer all functions including device, node, network, and database management and data reporting. This will serve as an early prototype for a system that could eventually be deployed at an actual parking facility.