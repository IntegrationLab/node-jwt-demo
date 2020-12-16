# node-jwt-demo
#Based on JWT Authentication Tutorial - Node.js by Web Dev Simplified

#Init
npm init -y

#Install base packages
npm i express jsonwebtoken dotenv

#Nodemon for auto deploy changes
npm i --save-dev nodemon

#Start server
npm run devStart

#Create crypto secrets
require('crypto').randomBytes(64).toString('hex')

#Testing
Install Rest Client and Click on Send Request button on top of the URL in rest file.
