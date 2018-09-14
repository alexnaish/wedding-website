#!/bin/bash

# Copy node_modules across
cp -r node_modules api/;

# Move into directory and run serverless deploy
cd api
npx serverless deploy --verbose;
