const Rect = require('./Rect.js');
class Text extends Rect { 
  constructor(options) {
    super(options);
    if (options.content == null) {
      this.content = '';
    } else {
      this.content = options.content + '';
    }
    this.style.textAlign = options.style.textAlign;
    this.style.color = options.style.color || 'black';
    this.style.fontSize = options.style.fontSize || 14;
    this.style.fontWeight = options.style.fontWeight;
    this.style.fontFamily = options.style.fontFamily;
    this.style.lineHeight = options.style.lineHeight || this.style.fontSize + 2;
    this.style.textShadow = options.style.textShadow;
  }
  // 计算文本长度
  measureText (text) {
    const {fontSize} = this.style;
    // 匹配中文正则
    const cReg = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g;
    // 中文字符个数
    const cLength = text.replace(cReg, '').length;
    // 非中文字符个数
    const hLength = text.length - cLength;
    return fontSize * cLength + fontSize / 2 * hLength;
  }
  // 文本是否超出一行
  exceedWidth (content, width) {
  	console.log(this.measureText(content, this.fontSize) >= width)
    return this.measureText(content, this.fontSize) >= width;
  }
  draw () {
    const {width, lineHeight} = this.style;
    let containerW = width ? width : this.parentNode.style.width;
    const content = this.content;
    let textStr = '';
    let dy = 0;

    // 判断折行的情况
    if (this.exceedWidth(content, containerW)) {
      for (let i = 0; i < content.length; i++) {
        textStr += content[i];
        if (this.exceedWidth(textStr, containerW)){
          this.drawText(textStr.slice(0, textStr.length - 1), containerW, dy);
          textStr = '';
          dy += lineHeight;
          i --;
        }
      }
      if (textStr) {
        this.drawText(textStr, containerW, dy);
      }
    } else {
      // 只有一行
      this.drawText(content, containerW);
    }

  }
  // 根据情况绘制文本
  drawText (content, containerW, dy) {
    const {textAlign, fontSize, left, top, color, textShadow} = this.style;
    let ctx = this.ctx;
    let alignPoint;

    dy = dy || 0;
    if (color) {
      ctx.setFillStyle(color);
    }
    if (textAlign) {
      ctx.setTextAlign(textAlign);
    }
    if (fontSize) {
      ctx.setFontSize(fontSize);
    } 
    if (textShadow) {
      ctx.setShadow(...textShadow);
    }

    if (textAlign && containerW) {
      // 相对自己的尺寸进行对齐
      if (textAlign === 'center') {
        alignPoint = containerW / 2;
      } else if (textAlign === 'left') {
        alignPoint = 0;
      } else if (textAlign === 'right') {
        alignPoint = containerW;
      }
      ctx.fillText(content, alignPoint - left, fontSize + dy);
    } else {
      ctx.fillText(content, 0, fontSize + dy);
    }
  }
}


module.exports = Text;