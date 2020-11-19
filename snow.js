class Snow{
  constructor(){
    this.x = Math.floor(Math.random() * game.width);
    this.y = 0;
    this.dx = Math.random() * 4 - 2;
    this.dy = Math.random() * 5;

    this.size = Math.floor(Math.random() * 20) + 12;
    this.text = '❄';
    game.snowList.push(this);
  }

  update(){
    this.x += this.dx;
    this.y += this.dy;
    if(this.x < 0 || this.x > game.width || this.y > game.height){
      this.destroy();
    }
  }

  draw(){
    game.ctx.save();
    game.ctx.beginPath();
    game.ctx.fillStyle = '#fff';
    game.ctx.font = this.size + 'px Avenir, Helvetica Neue, Helvetica, Arial, sans-serif';
    game.ctx.textAlign = 'center';
    game.ctx.textBaseline = 'middle';
    game.ctx.closePath();
    game.ctx.fillText(this.text,this.x,this.y);
    game.ctx.restore();
  }
  
  destroy(){
    game.snowList.map((item,index,arr) =>{
      if(item == this){
        arr.splice(index,1);
      }
    })
  }

  start(){
    game.timer = setInterval(() => {
      game.ctx.clearRect(0,0,game.width,game.height);
      for(let i =0;i<game.snowList.length;i++){
        game.snowList[i].update();
        game.snowList[i] && game.snowList[i].draw();
      }
    },20);
  }
}