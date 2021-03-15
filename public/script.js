//imports 

import {home} from './src/scenes/home';



// antes de tudo criar um server npx serve
//https://phaser.io/tutorials/making-your-first-phaser-3-game-portuguese/index
// http://localhost:5000/
// função anônima
//criar uma pasta public para o front end
// instalar o npm install express
// dar npm init 
//dps npm i express http-server
//após isso testar npm start
// vai dar um erro de get, pois é necessário criar a homepage
//(function(){
    //testar para ver se o Phaser está funcionando
    console.log(Phaser);

    //Dimensões //deixa automaticamente, ou como CANVAS ou como WebGl//Div na qual o game irá rodar//fase com os métodos 
                                        //dependendo do dispositivo
    var config={
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics:{
                default:'arcade',
                arcade:{
                    gravity:{y:300},
                    debug: false
                }
            },
            scene:{
                
               // preload:preload,
                //create:create,
                //update:update
                home
            }
            
    };

                           
    var game = new Phaser.Game(config);

    //carrega recursos utilizados na execução do jogo
   // function preload(){
        //carrega a imagem
      //  this.load.image('background','./img/background.png');
   // }

    //cria os elementos dentro do contexto do jogo
   // function create(){
        //adiciona imagem
                        //coordenadas x,y //nome da imagem
     //   this.add.image(400,300,'background');
        //.setOrigin(400,300)
   // }

    //toda lógica que deve ser verificada dentro do loop do jogo
   // function update(){

   // }
//}());