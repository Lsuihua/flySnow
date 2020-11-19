class Game{
  constructor(param){
    this.canvas = document.getElementById(param.canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.snowList = [];

    this.timer = null;

    this.init();
  }

  init(){
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  start(){
    var snow = new Snow(),
        self = this;
    requestAnimationFrame(self.start.bind(self));
    if(self.timer) return;
    snow.start();
    
  }
}