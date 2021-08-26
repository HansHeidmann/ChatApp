const chat = [];

server((req, res) => {
   if(req.url === '/getMessages') {
       res.end(chat);
   } else {
       chat.push(req.query.message);
   }
});
