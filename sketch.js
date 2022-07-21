
var count;
var games = [];
var step = 0;

function setup() {
  database = firebase.database();
  getCount();
  

}

function draw(){
  if(step == 0 && count){
    for(let i = 0 ; i < count ; i++){
      getGame(i);
    }
    step += 1;
  }

  if(games[count - 1] && step == 1){
    for(let i of games){
      document.write(i.name);
      document.write("<br>")
    }
    step += 1;
  }
}

function part1(){
  for(let i = 0 ; i < count ; i++ ){
    getGame(i);
  }
}

function part2(){
  for(let i of games){
    //document.write(i.name);
  }
}

function getCount(){
  var reference=database.ref("count");
  reference.on("value",data => {
    count=data.val();
  });
}

function getGame(x){
  var reference = database.ref("games/game" + (x + 1));
  reference.on("value",function(data){
    games[x] = data.val();
  })
}
