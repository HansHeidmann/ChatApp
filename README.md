# ChatApp
Simple JavaScript Chat App using NodeJS and socket.io  

Setup:  
- npm init  
- npm i socket.io  
- add script in package.json

Open 2 terminals then:   
- in terminal 1: npm run ChatAppServer  //fires up "ChatAppServer": "nodemon server.js" from package.json
- in terminal 2: python -m http.server --cgi 5000  

TODO:
- position messageForm and send button below a scrolling text field that contains the appended chat message divs
