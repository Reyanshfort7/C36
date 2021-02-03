class Player{
    constructor(){}
    getCount(){
    var playerCountRef=database.ref('playerCount');
   playerCountRef.on("value",function(data){
    playerCount=data.val();
    
    })
    }
    updateCount(count){
    database.ref('/').update({
    gameState:state
    })
    }
    start(){
    if(gameState===0){
    player=new Player();
    player.getCount();
    form=new Form();
    form.display();
    }
    }
    }