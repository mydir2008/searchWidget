class Rect { 
  constructor(options) {
    this.style = {};
    this.style.left = options.style.left || 0;
    this.style.top = options.style.top || 0;
    this.style.scale = options.style.scale;
    this.style.rotate = options.style.rotate;
    this.style.scale = options.style.scale;
    this.style.transformOrigin = options.style.transformOrigin;
    this.style.width = options.style.width;
    this.style.height = options.style.height;
    this.style.opacity = options.style.opacity;
    this.style.borderRadius = options.style.borderRadius;
    this.style.backgroundColor = options.style.backgroundColor;
    this.style.borderColor = options.style.borderColor;
    this.style.borderWidth = options.style.borderWidth;
    this.style.borderBottomWidth = options.style.borderBottomWidth;
    this.style.borderLeftWidth = options.style.borderLeftWidth;
    this.style.borderTopWidth = options.style.borderTopWidth;
    this.style.borderRightWidth = options.style.borderRightWidth;
    this.style.boxShadow = options.style.boxShadow;

    this.children = options.children || [];
    this.parent = null;
  }
  // 子类再实现具体渲染逻辑
  draw () {

  }
  __draw (ctx) { 
      this.ctx = ctx;
      ctx.save();
			//方便子元素相对于父元素位置进行绘制
			this.__translate();
			// 透明度
      this.__setOpacity();
      // 旋转/缩放
      this.__transform();
      // 绘制阴影
      this.__drawShadow();
      // 绘制背景颜色
      this.__drawBackground();
      // 绘制边框
      this.__drawBorder();

      // 具体渲染逻辑
      ctx.save();     
      this.draw();
      // ctx.draw(true);
      ctx.restore();
      
      // 渲染子元素
      this.drawChildren();
      ctx.restore();
      
  }
  __setOpacity () {
    if(!this.opacity || this.opacity > 1) {
      return;
    }
    let opacity = this.style.opacity;
    const parentOpacity = this.getOpacity();
    //叠加父元素的透明属性
    if(parentOpacity && parentOpacity < 1){
      opacity = opacity * parentOpacity;
    }
    this.ctx.setGlobalAlpha(opacity);
  }
  // 获取叠加的透明值
  getOpacity () {
    let parentNode = this.parentNode;
    let opacity = 1;
    while (parentNode) {
      if (parentNode.style.opacity) {
        opacity = Math.min(parentNode.style.opacity * opacity, 1);
      }
      parentNode = parentNode.parentNode;
    }
    return opacity;
  }
  __translate () {
    const {left, top} = this.style;
    if(!left && !top){
      return;
    }
    this.ctx.translate(Math.round(left), Math.round(top));
  }
  __transform () {
    const ctx = this.ctx;
    let {transformOrigin, rotate ,scale, width, height} = this.style;

    if (!rotate && !scale) {
      return;
    }
    if (!transformOrigin || !transformOrigin.length) {
      transformOrigin = [width / 2, height / 2];
    }
    ctx.translate(transformOrigin[0], transformOrigin[1]);
    if (rotate != null) {
      ctx.rotate(rotate * Math.PI / 180);
    }
    if (scale != null) {
      ctx.scale(scale[0], scale[1]);
    }
    ctx.translate(-transformOrigin[0], -transformOrigin[1]);      
  }
  __drawBackground () {
    const ctx = this.ctx;
    const {backgroundColor, width, height} = this.style;
    if (!backgroundColor) {
      return;
    }
    ctx.save();
    ctx.setFillStyle(backgroundColor);
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
  __drawShadow () {
    const ctx = this.ctx;
    const {boxShadow, width, height} = this.style;
    if (!boxShadow) {
      return;
    }
    ctx.save();
    ctx.setShadow(...boxShadow);
    ctx.setFillStyle('white');
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  }
  __drawBorder (borderDirection, borderWidth, borderColor){
    const {height, width, borderLeftWidth, borderBottomWidth, borderRightWidth, borderTopWidth} = this.style;
    const ctx = this.ctx;

    if (!borderColor || (!borderWidth && !borderBottomWidth && !borderTopWidth && !borderLeftWidth && !borderRightWidth)) {
      return;
    }

    ctx.save();
    ctx.setStrokeStyle(borderColor);
    
    // 绘制全边框
    if (borderWidth) {
      ctx.setLineWidth(borderWidth);
      ctx.strokeRect(-borderWidth / 2, -borderWidth / 2, width + borderWidth, height + borderWidth);
      ctx.restore();
      return;
    }

    ctx.beginPath();
    //底部边框
    if(borderBottomWidth){
      ctx.setLineWidth(borderBottomWidth);
      ctx.moveTo(-(borderLeftWidth || 0), height + borderBottomWidth / 2);
      ctx.lineTo(width + (borderRightWidth || 0), height + borderBottomWidth / 2);
    }
    //左边边框
    if(borderLeftWidth){
      ctx.setLineWidth(borderLeftWidth);
      ctx.moveTo(-borderLeftWidth / 2, 0);
      ctx.lineTo(-borderLeftWidth / 2, height);
    }
    //右边边框
    if(borderRightWidth){
      ctx.setLineWidth(this.borderRightWidth);
      ctx.moveTo(width + borderRightWidth / 2, 0);
      ctx.lineTo(width + borderRightWidth / 2, height);
    }
    //顶部边框
    if(borderTopWidth){
      ctx.setLineWidth(borderTopWidth);
      ctx.moveTo(-(borderLeftWidth || 0), -borderTopWidth / 2);
      ctx.lineTo(width + (borderRightWidth || 0), -borderTopWidth / 2);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }  
  // 渲染子元素
  drawChildren () {
    this.children.forEach((child) => {
      child.parentNode = this;
      child.__draw(this.ctx);
    });
  }
}


module.exports = Rect;