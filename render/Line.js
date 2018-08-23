const Rect = require('./Rect.js');
class Line extends Rect { 
  constructor(options) {
    super(options);
    //this.url = options.url;
    if (options.lineType == 'dotted') {
      this.lineType = options.lineType;
    }else{
      this.lineType = ''
    }
    this.lineWidth = options.lineWidth;
    this.xone = options.xone;
    this.yone = options.yone;
    this.xtwo = options.xtwo;
    this.ytwo = options.ytwo;
    this.dashLen = options.dashLen;
    this.color = options.color;
  }
  getBeveling(x,y){
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  }
  drawLine(x1, y1, x2, y2, dashLen,lineWidth,color) {
    var ctx = this.ctx
    ctx.beginPath();
    
    if(dashLen == 0){
      ctx.setStrokeStyle(color)
      ctx.setLineWidth(lineWidth)
      ctx.moveTo(x1,y1);
      ctx.lineTo(x2,y2);
    }else{
      ctx.setStrokeStyle(color)
      ctx.setLineWidth(lineWidth)
      var beveling = this.getBeveling(x2-x1,y2-y1);
      var num = Math.floor(beveling/dashLen);
      for(var i = 0 ; i < num; i++){
        ctx[i%2 == 0 ? 'moveTo' : 'lineTo'](x1+(x2-x1)/num*i,y1+(y2-y1)/num*i);
      }
    }
    ctx.stroke();
  };
  draw () {
    const xone = this.xone;
    const yone = this.yone;
    const xtwo = this.xtwo;
    const ytwo = this.ytwo;
    const dashLen = this.dashLen;
    const lineWidth = this.lineWidth;
    const color = this.color;
    this.drawLine(xone,xone,xtwo,ytwo,dashLen,lineWidth,color);
    
  }
}


module.exports = Line;