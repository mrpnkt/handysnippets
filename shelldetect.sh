#!/bin/bash
# Shell Detector – is a application that helps you find and identify php/cgi(perl)/asp/aspx shells.
# Shell Detector has a “web shells” signature database that helps to identify “web shell” up to 99%.
# http://shelldetector.com/
wget https://raw.github.com/emposha/Shell-Detector/master/shelldetect.py
python shelldetect.py -r True -d ./
