class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }

    readplayercount(){
        database.ref("playercount").on("value",(data)=>{

      playercount=data.val()      
        })   
    }

    writeplayercount(count){
        database.ref("/").update({
            playercount:count
        })
    }
    writeplayerinfo(){
    var playerindex="players/player"+ this.index
        database.ref(playerindex).set({
        playername:this.name  ,
        distance:this.distance
        })
    }

    static getplayersinfo(){
        database.ref("players").on("value",(data)=>{
    allplayers=data.val()
        })
    }
}
