const Text = require('./Text.js');
const Image = require('./Image.js');
const Line = require('./Line.js');
const Rect = require('./Rect.js');

module.exports = {
  Text,
  Image,
  Line,
  Rect,
  draw (list) {
    this.ctx.clearRect(0,0,this.windowWidth,this.windowHeight);
    //09BB07
    //this.ctx.fillRect(0,0,378,300)
    list.forEach(l => {
      l.__draw(this.ctx);
    });
    this.ctx.draw();
  },
  clearCanvas(){
    this.ctx.clearRect(0,0,this.windowWidth,this.windowHeight);
  },
  init (options) {
    this.windowWidth = options.windowWidth || 200;
    this.windowHeight = options.windowHeight || 200;
    this.ctx = options.ctx;
  }
};