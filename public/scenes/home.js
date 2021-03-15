import Phaser from 'phaser';


import {CST} from '../CST';

export default class home extends Phaser.Scene{
    constructor(){
       // const sceneConfig = {
          //  key:'IsoInteractionExample',
          //  mapAdd: {isoPlugin:'iso'}
       // };
        
       super({
            //key: CST.SCENES.HOME

       })

      //super(sceneConfig);
    }


    //carrega recursos utilizados na execução do jogo
     preload(){
        //carrega a imagem
        this.load.image('background','./img/background.png');
        //return preload.call(this);
        //this.load.plugin('IsometricTileSet','plugins/phaser3-plugin-isometric-master/')
    }

    //cria os elementos dentro do contexto do jogo
     create(){
        //adiciona imagem
                        //coordenadas x,y //nome da imagem
        this.add.image(400,300,'background');

        //return create.call(this);
        //.setOrigin(400,300)
    }

    //toda lógica que deve ser verificada dentro do loop do jogo
    update(){
       // return update.call(this);
    }
}