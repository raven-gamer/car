class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","enter your name")
    this.button=createButton("Play")
    this.title=createElement("h2")
    this.greeting=createElement("h3")
    this.reset=createButton("Reset")
  }
  hide(){
    this.input.hide()
    this.button.hide()
    this.title.hide()
    this.greeting.hide()
  }

  display(){                                 
this.title.html("Car Racing")  
this.title.position(displayWidth/2,50)

this.input.position(displayWidth/2,displayHeight/2-80)
this.button.position(displayWidth/2,displayHeight/2)  
this.reset.position(displayWidth-100,40)

this.button.mousePressed(()=>{
  this.input.hide()
this.button.hide()
player.name=this.input.value()
playercount+=1
player.index=playercount 
player.writeplayercount(playercount)
player.writeplayerinfo()
this.greeting.html("Hello "+player.name)
this.greeting.position(displayWidth/2-70,displayHeight/4)
})

this.reset.mousePressed(()=>{
  location.reload()
  player.writeplayercount(0)
  game.writegamestate(0)
  database.ref("players").remove()
})
}}
      