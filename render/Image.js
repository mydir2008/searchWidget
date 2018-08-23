const Rect = require('./Rect.js');
class Image extends Rect{
  constructor(options){
    super(options);
    this.url = options.url;
    this.ix = options.ix;
    this.iy = options.iy;
    this.style = options.style
  }
  draw(){
    let ctx = this.ctx;
    const ix = this.ix;
    const iy = this.iy;
    ctx.drawImage(this.url,ix,iy,this.style.width,this.style.height);
  }
}
module.exports = Image;