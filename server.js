const express = require('express')
   ,http = require('http') 
   ,app = express() 
   ,server = http.createServer(app)
   ,path = require('path')

    // entregar arquivos estáticos como imagens, arquivos css, e arquivos javascript//função middleware
    //express.static
   app.use(express.static(path.join(__dirname, './public')))

 //homepage// req cuida de tudo da requisição e o res cuida de responder as requisições
  //app.get('/',(req,res)=>{
    //  res.send('<h1>Home</h1>')
 // })

server.listen(3000,()=>{
  
console.log('Server Ligado em http://localhost:3000');
console.log('Para desligar o servidor: ctrl+c');
})



