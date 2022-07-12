#!/usr/bin/env
##Define  Variables
api_pid=$!
API_HOST=test.k6.io
k6 run -e API_HOST=$API_HOST --config config.json tests/test.js

