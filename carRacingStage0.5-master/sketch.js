var playercount
var gamestate=0
var game,form,player
var dist=0
var allplayers 
var car1,car2,car3,car4,cars
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
 game = new Game()
game.readgamestate()
game.start()
}


function draw(){
 if (playercount==4){
  game.writegamestate(1)
 }
 if (gamestate==1){
   game.play()

 }
}
                                