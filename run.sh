#!/usr/bin/env
REPORT_DATE=$(date +"%Y_%m_%dT%H_%M_%S")
##Define Environment Variables
k6 run --config config.json --out csv="report/report_$REPORT_DATE.csv" tests/test.js