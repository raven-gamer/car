class Game{
    constructor(){

    }
    readgamestate(){
        database.ref("gamestate").on("value",(data)=>{

gamestate=data.val()

        })
    }

    writegamestate(state){
        database.ref("/").update({
            gamestate:state
        })

    
}

start(){
    if (gamestate==0){
    form= new Form()
form.display()

player= new Player()
player.readplayercount()

    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    cars=[car1,car2,car3,car4]
}

play(){
    form.hide()
    Player.getplayersinfo()
    if (allplayers!==undefined){
        background(255)
    var i=0
    var x=0
    var y
    for(var p in allplayers){
    i+=1
    x+=200
    y=displayHeight-allplayers[p].distance
    cars[i-1].x=x
    cars[i-1].y=y

    if (i==player.index){
        camera.position.x=displayWidth/2
        camera.position.y=cars[i-1].y
    }
    }
   }
   if (keyIsDown(UP_ARROW)){
     player.distance+=10
     player.writeplayerinfo()
   }
   drawSprites()
}
}