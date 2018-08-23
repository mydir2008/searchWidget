const Painter = require('./render/index.js');
const style = require('./style.js');
const { Text, Image, Line, Rect } = Painter;
/*const dataDemo = {
    width:345,
    height:204,
    query:{
        widgetData:'%7B%22err_code%22:0,%22err_msg%22:%22ok%22,%22flight_number%22:%22NULL%22,%22flight_dep%22:%22PEK,NAY%22,%22flight_arr%22:%22CAN%22,%22flight_info_list%22:%5B%7B%22flight_number%22:%22CZ3166%22,%22flight_airline%22:%22%E5%8D%97%E6%96%B9%E8%88%AA%E7%A9%BA%22,%22flight_state%22:%22%E5%88%B0%E8%BE%BE%22,%22flight_state_color%22:%22#99cc01%22,%22flight_plan_take_off_time%22:1498516200,%22flight_plan_land_time%22:1498528800,%22flight_predict_take_off_time%22:1498516200,%22flight_predict_land_time%22:1498527720,%22flight_actual_take_off_time%22:1498517460,%22flight_actual_land_time%22:1498527000,%22flight_stop_over_flag%22:0,%22flight_take_off_place%22:%22%E5%8C%97%E4%BA%AC%22,%22flight_land_place%22:%22%E5%B9%BF%E5%B7%9E%E5%B9%BF%E5%B7%9E%22,%22flight_checkin_place%22:%22E11-16,F01-22,G01-11%22,%22flight_boarding_port%22:%2250%22,%22flight_reach_port%22:%22B%E5%8C%BAW2%22%7D,%7B%22flight_number%22:%22MF1062%22,%22flight_airline%22:%22%E5%8E%A6%E9%97%A8%E8%88%AA%E7%A9%BA%22,%22flight_state%22:%22%E5%88%B0%E8%BE%BE%22,%22flight_state_color%22:%22#99cc01%22,%22flight_plan_take_off_time%22:1498516200,%22flight_plan_land_time%22:1498528800,%22flight_predict_take_off_time%22:1498516200,%22flight_predict_land_time%22:1498527720,%22flight_actual_take_off_time%22:1498517460,%22flight_actual_land_time%22:1498527000,%22flight_stop_over_flag%22:0,%22flight_take_off_place%22:%22%E5%8C%97%E4%BA%AC%22,%22flight_land_place%22:%22%E5%B9%BF%E5%B7%9E%E5%B9%BF%E5%B7%9E%22,%22flight_checkin_place%22:%22E11-16,F01-22,G01-11%22,%22flight_boarding_port%22:%2250%22,%22flight_reach_port%22:%22B%E5%8C%BAW2%22%7D,%7B%22flight_number%22:%22MU3576%22,%22flight_airline%22:%22%E4%B8%9C%E6%96%B9%E8%88%AA%E7%A9%BA%22,%22flight_state%22:%22%E5%88%B0%E8%BE%BE%22,%22flight_state_color%22:%22#99cc01%22,%22flight_plan_take_off_time%22:1498516200,%22flight_plan_land_time%22:1498528800,%22flight_predict_take_off_time%22:1498516200,%22flight_predict_land_time%22:1498527720,%22flight_actual_take_off_time%22:1498517460,%22flight_actual_land_time%22:1498527000,%22flight_stop_over_flag%22:0,%22flight_take_off_place%22:%22%E5%8C%97%E4%BA%AC%22,%22flight_land_place%22:%22%E5%B9%BF%E5%B7%9E%E5%B9%BF%E5%B7%9E%22,%22flight_checkin_place%22:%22E11-16,F01-22,G01-11%22,%22flight_boarding_port%22:%2250%22,%22flight_reach_port%22:%22B%E5%8C%BAW2%22%7D,%7B%22flight_number%22:%22CZ9224%22,%22flight_airline%22:%22%E5%8D%97%E6%96%B9%E8%88%AA%E7%A9%BA%22,%22flight_state%22:%22%E5%88%B0%E8%BE%BE%22,%22flight_state_color%22:%22#99cc01%22,%22flight_plan_take_off_time%22:1498518900,%22flight_plan_land_time%22:1498531200,%22flight_predict_take_off_time%22:1498518900,%22flight_predict_land_time%22:1498528620,%22flight_actual_take_off_time%22:1498519260,%22flight_actual_land_time%22:1498528740,%22flight_stop_over_flag%22:0,%22flight_take_off_place%22:%22%E5%8C%97%E4%BA%AC%22,%22flight_land_place%22:%22%E5%B9%BF%E5%B7%9E%E5%B9%BF%E5%B7%9E%22,%22flight_checkin_place%22:%22G12-22,H%22,%22flight_boarding_port%22:%2268%22,%22flight_reach_port%22:%22B%E5%8C%BAW3%22%7D,%7B%22flight_number%22:%22MU5181%22,%22flight_airline%22:%22%E4%B8%9C%E6%96%B9%E8%88%AA%E7%A9%BA%22,%22flight_state%22:%22%E5%88%B0%E8%BE%BE%22,%22flight_state_color%22:%22#99cc01%22,%22flight_plan_take_off_time%22:1498518900,%22flight_plan_land_time%22:1498531200,%22flight_predict_take_off_time%22:1498518900,%22flight_predict_land_time%22:1498528620,%22flight_actual_take_off_time%22:1498519260,%22flight_actual_land_time%22:1498528740,%22flight_stop_over_flag%22:0,%22flight_take_off_place%22:%22%E5%8C%97%E4%BA%AC%22,%22flight_land_place%22:%22%E5%B9%BF%E5%B7%9E%E5%B9%BF%E5%B7%9E%22,%22flight_checkin_place%22:%22G12-22,H%22,%22flight_boarding_port%22:%2268%22,%22flight_reach_port%22:%22B%E5%8C%BAW3%22%7D%5D,%22flight_count%22:5,%22flight_update_time%22:1498563871%7D'
    }
}*/
Widget({
    isEncodeJson (str){
        return typeof str === 'string' && str.trim()[0] === '%';
    },
    getWidgetParam (paramName, data) {
        if (paramName === 'widgetData' || paramName === 'wxParamData' || paramName === 'data') {
            if (this.isEncodeJson(data[paramName])) {
                return JSON.parse(decodeURIComponent(data[paramName]));
            }else{
                return JSON.parse(data[paramName]);
            }
        }
    },
    onLoad(options) {
        console.log('options')
        const ctx = this.getContext();
        const {width, height} = options;
        this.windowWidth = width;
        this.windowHeight = height;
        Painter.init({
            windowWidth: width,
            windowHeight: height,
            ctx
        });
        const widgetData = this.getWidgetParam('widgetData',options.query);
        if (!!widgetData) {
            if (widgetData.err_code == 0) {
                if (widgetData.flight_number == 'NULL') {
                    this.drawDA(widgetData)
                } else {
                    this.draw(widgetData);
                }
            }else{
                this.drawError(widgetData)
            }
        }
    },
    onDataPush(options) {
        console.log('options')
        var data;
        var newtime = new Date().getTime();
        this.firstTime++
        // 有数据
        if (options.data) {
            data = this.getWidgetParam('data', options);
            console.log('wxParamData---' + data)
            //debugger;
            var time = (data.flight_update_time + 600) * 1000
            if(this.firstTime > 1 || time > newtime){
                console.log('firstTime---' + data)
                if (data.err_code == 0) {
                    if (data.flight_number == 'NULL') {
                        console.log('onDataPush点到点航班查询')
                        this.drawDA(data)
                    } else {
                        console.log('onDataPush航班号查询')
                        this.draw(data);
                    }
                }else{
                    this.drawError(data)
                }
            }
        }
    },
    formatDate(date, format) {
        date = new Date(date * 1000)
        var formators = {
            y: function(date, length) {
                date = date.getFullYear()
                return date < 0 ? 'BC' + (-date) : length < 3 && date < 2000 ? date % 100 : date
            },
            M: function(date) {
                return date.getMonth() + 1
            },
            d: function(date) {
                return date.getDate()
            },
            H: function(date) {
                return date.getHours()
            },
            m: function(date) {
                return date.getMinutes()
            },
            s: function(date) {
                return date.getSeconds()
            },
            e: function(date, length) {
                return (length === 1 ? '' : length === 2 ? '周' : '星期') + [length === 2 ? '日' : '天', '一', '二', '三', '四', '五', '六'][date.getDay()]
            }
        }
        return (format || 'yyyy/MM/dd HH:mm:ss').replace(/(\w)\1*/g, function(all, key) {
            if (key in formators) {
                key = '' + formators[key](date, all.length)
                while (key.length < all.length) {
                    key = '0' + key
                }
                all = key
            }
            return all
        })
    },
    toweek(date, format) {
        date = new Date(date * 1000)
        var week = date.getDay();
        var weekname;
        switch (week) {
            case 0:
                weekname = '日'
                break;
            case 1:
                weekname = '一'
                break;
            case 2:
                weekname = '二'
                break;
            case 3:
                weekname = '三'
                break;
            case 4:
                weekname = '四'
                break;
            case 5:
                weekname = '五'
                break;
            case 6:
                weekname = '六'
                break;
        }
        return (format || '星期w').replace(/(\w)\1*/g, function(all) {
            all = weekname
            return all
        })
    },
    flight_place(val, num) {
        if(val.length > num){
            val = val.substring(0, num) + '...'
        }
        /*if (val.length >= num) {
            val = val.substring(0, num - 1) + '...'
        }*/
        return val
    },
    measureText (text,fontSize) {
        var cReg = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g;
        var cLength = text.replace(cReg, '').length;
        var hLength = text.length - cLength;
        return fontSize * cLength + 2 * hLength ;
    },
    firstTime:0,
    fixTopValue(val) {
        return Math.round(this.windowHeight / 227 * val); //计算高度
    },
    fixLeftValue(val) {
        return Math.round(this.windowWidth / 378 * val); //计算宽度
    },
    fixGainShow(val) {
        return val < 0 ? ('- ' + (val * -1)) : val;
    },
    fontSize(val){
        if(this.windowWidth / 378 < 1){
            val = val/10*8
        }
        return val
    },
    comdto(val) {
        if (val > 3) {
            return '更多航段，请点击查看'
        } else {
            return '更多信息，请点击查看'
        }
    },
    clearCanvas() {
        Painter.clearCanvas()
    },
    drawError(data){
        Painter.draw([
            new Rect({
                style: Object.assign(style['share-container'],{
                    width:this.windowWidth,
                }), //画布位置 0 0
                children: [
                    new Text({
                        content: '没有查询到对应的航班信息',
                        style: Object.assign(style['flight_state'], {
                            top: this.windowHeight / 2 - 8,
                            fontSize: this.fontSize(16),
                            left: this.windowWidth/2 - 6*16,
                            color: '#888888'
                        })
                    })
                ]
            })
        ])
    },
    drawTest(data){
        console.log(Painter)
        Painter.draw([
            new Rect({
                style: Object.assign(style['share-container'],{
                    width:this.windowWidth,
                }), //画布位置 0 0
                children: [
                    new Text({
                        content: typeof data,
                        style: Object.assign(style['flight_state'], {
                            top: 10,
                            fontSize: this.fontSize(16),
                            left: 0,
                            color: '#888888'
                        })
                    }),
                    new Text({
                        content: data,
                        style: Object.assign(style['flight_state'], {
                            top: 32,
                            fontSize: this.fontSize(16),
                            left: 0,
                            color: '#888888'
                        })
                    })
                ]
            })
        ])
    },
    drawAlls(data) {
        var newrext,newarr;
        var flight_info_list = data.flight_info_list;
        var flight_take_off_time,flight_land_time,flight_take_off_name,flight_land_name;
        if(!data.flight_info_list[0].flight_actual_take_off_time){
    		if(!data.flight_info_list[0].flight_predict_take_off_time){
    			flight_take_off_time = data.flight_info_list[0].flight_plan_take_off_time
    			flight_take_off_name = '计划起飞'
    		}else{
    			flight_take_off_time = data.flight_info_list[0].flight_predict_take_off_time
    			flight_take_off_name = '预计起飞'
    		}
    	}else{
    		flight_take_off_time = data.flight_info_list[0].flight_actual_take_off_time
    		flight_take_off_name = '实际起飞'
    	}
    	if(!data.flight_info_list[0].flight_actual_land_time){
    		if(!data.flight_info_list[0].flight_predict_land_time){
    			flight_land_time = data.flight_info_list[0].flight_plan_land_time
    			flight_land_name = '计划到达'
    		}else{
    			flight_land_time = data.flight_info_list[0].flight_predict_land_time
    			flight_land_name = '预计到达'
    		}
    	}else{
    		flight_land_time = data.flight_info_list[0].flight_actual_land_time
    		flight_land_name = '实际到达'
    	}
    	
        if(data.flight_count == 1){
            newarr = [
                    //航班状态
                    new Text({
                        content: data.flight_info_list[0].flight_state,
                        style: Object.assign(style['flight_state'], {
                            top: this.fixTopValue(56),
                            fontSize: this.fontSize(28),
                            left: 0,
                            color: data.flight_info_list[0].flight_state_color
                        })
                    }),
                    //这里画一条虚线
                    new Line({
                        dashLen: 5,
                        lineWidth: 0.4,
                        xone: 0,
                        yone: 0,
                        xtwo: this.windowWidth,
                        ytwo: 0,
                        color: '#d8d8d8',
                        style: Object.assign({
                            top: this.fixTopValue(104),
                        })
                    }),
                    //预计起飞标题
                    new Text({
                        content: flight_take_off_name,
                        style: Object.assign({
                            top: this.fixTopValue(125),
                            fontSize: this.fontSize(14),
                            color: '#767676'
                        })
                    }),
                    //预计起飞城市
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_take_off_place, 3),
                        //flight_land_place
                        style: Object.assign({
                            top: this.fixTopValue(156),
                            color: '#3f4040',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    //预计起飞时间
                    new Text({
                        content: this.formatDate(flight_take_off_time, 'HH:mm'),
                        style: Object.assign({
                            left: this.measureText(this.flight_place(data.flight_info_list[0].flight_take_off_place, 3),this.fontSize(18))  + this.fixLeftValue(10),
                            top: this.fixTopValue(156),
                            color: '#509fc9',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    //预计到达标题
                    new Text({
                        content: flight_land_name,
                        style: Object.assign({
                            left: this.fixLeftValue(214),
                            top: this.fixTopValue(125),
                            color: '#767676',
                            fontSize: this.fontSize(14)
                        })
                    }),
                    //预计到达城市
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_land_place, 3),
                        style: Object.assign({
                            left: this.fixLeftValue(214),
                            top: this.fixTopValue(156),
                            color: '#3f4040',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    //预计到达时间
                    new Text({
                        content: this.formatDate(flight_land_time, 'HH:mm'),
                        style: Object.assign({
                            left: this.fixLeftValue(214) + this.measureText(this.flight_place(data.flight_info_list[0].flight_land_place, 3),this.fontSize(18)) + this.fixLeftValue(10),
                            top: this.fixTopValue(156),
                            color: '#509fc9',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    new Image({
                        url: 'img/flight_oneway_big_3x.png',
                        ix: this.fixLeftValue(142),
                        iy: this.fixTopValue(144),
                        style: Object.assign({
                            width: this.fontSize(25),
                            height: this.fontSize(25)
                        })
                    }),

                    //值机柜台标题
                    new Text({
                        content: '值机柜台:',
                        style: Object.assign({
                            top: this.fixTopValue(200),
                            color: '#808186',
                            fontSize: this.fontSize(14)
                        })
                    }),

                    //值机柜台
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_checkin_place, 6),
                        style: Object.assign({
                            left: 66,
                            top: this.fixTopValue(200),
                            color: '#888888',
                            fontSize: this.fontSize(14)
                        })
                    }),

                    //值机柜台后实线
                    new Line({
                        dashLen: 0,
                        lineWidth: 0.5,
                        xone: 0,
                        yone: this.fixTopValue(24),
                        xtwo: 0,
                        ytwo: 14,
                        color: "#d8d8d8",
                        style: Object.assign({
                            top: this.fixTopValue(202),
                            left: this.windowWidth / 3
                        })
                    }),

                    //登机口标题
                    new Text({
                        content: '登机口:',
                        style: Object.assign({
                            left: this.windowWidth / 3 + 20,
                            top: this.fixTopValue(200),
                            color: '#888888',
                            fontSize: this.fontSize(14)
                        })
                    }),

                    //登机口
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_boarding_port, 6),
                        style: Object.assign({
                            left: this.windowWidth / 3 + 76,
                            top: this.fixTopValue(200),
                            color: '#888888',
                            fontSize: this.fontSize(14)
                        })
                    }),

                    //登机口后实线
                    new Line({
                        dashLen: 0,
                        lineWidth: 0.5,
                        xone: 0,
                        yone: this.fixTopValue(24),
                        xtwo: 0,
                        ytwo: 14,
                        color: "#d8d8d8",
                        style: Object.assign({
                            top: this.fixTopValue(202),
                            left: this.windowWidth / 3 * 2
                        })
                    }),

                    //到达口标题
                    new Text({
                        content: '到达口:',
                        style: Object.assign({
                            left: this.windowWidth / 3 * 2 + 20,
                            top: this.fixTopValue(200),
                            color: '#888888',
                            fontSize: this.fontSize(14)
                        })
                    }),

                    //到达口
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_reach_port, 6),
                        style: Object.assign({
                            left: this.windowWidth / 3 * 2 + 76,
                            top: this.fixTopValue(200),
                            color: '#888888',
                            fontSize: this.fontSize(14)
                        })
                    }),
                ]
        }
        if(data.flight_count > 1){
        	
            newarr = [
                    //航班状态
                    new Text({
                        content: data.flight_info_list[0].flight_state,
                        style: Object.assign(style['flight_state'], {
                            top: this.fixTopValue(63),
                            fontSize: this.fontSize(28),
                            left: 0,
                            color: data.flight_info_list[0].flight_state_color
                        })
                    }),
                    //这里画一条虚线
                    new Line({
                        dashLen: 5,
                        lineWidth: 0.4,
                        xone: 0,
                        yone: 0,
                        xtwo: this.windowWidth,
                        ytwo: 0,
                        color: '#d8d8d8',
                        style: Object.assign({
                            top: this.fixTopValue(124),
                        })
                    }),
                    //预计起飞标题
                    new Text({
                        content: flight_take_off_name,
                        style: Object.assign({
                            top: this.fixTopValue(157),
                            fontSize: this.fontSize(14),
                            color: '#767676'
                        })
                    }),
                    //预计起飞城市
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_take_off_place, 3),
                        //flight_land_place
                        style: Object.assign({
                            top: this.fixTopValue(194),
                            color: '#3f4040',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    //预计起飞时间
                    new Text({
                        content: this.formatDate(flight_take_off_time, 'HH:mm'),
                        style: Object.assign({
                            left: this.measureText(this.flight_place(data.flight_info_list[0].flight_take_off_place, 3),this.fontSize(18))  + this.fixLeftValue(16),
                            top: this.fixTopValue(194),
                            color: '#509fc9',
                            fontSize: this.fontSize(18)
                        })
                    }),

                    //飞机icon
                    new Image({
                        url: 'img/flight_oneway_big_3x.png',
                        ix: this.fixLeftValue(236),
                        iy: this.fixTopValue(198),
                        style: Object.assign({
                            width: this.fontSize(18),
                            height: this.fontSize(16)
                        })
                    }),
                    new Text({
                        content: '经停(' + (data.flight_count-2) + '次)' ,
                        style: Object.assign({
                            top: this.fixTopValue(157),
                            left: this.windowWidth / 2 - this.measureText(this.flight_place(data.flight_info_list[1].flight_land_place, 3), this.fontSize(14)),
                            fontSize: this.fontSize(14),
                            color: '#888888'
                        })
                    }),
                    //经停城市
                    new Text({
                        content: this.flight_place(data.flight_info_list[1].flight_land_place, 3),
                        //flight_land_place
                        style: Object.assign({
                            top: this.fixTopValue(194),
                            left: this.windowWidth / 2 - this.measureText(this.flight_place(data.flight_info_list[1].flight_land_place, 3), this.fontSize(14)),
                            color: '#200000',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    //飞机icon
                    new Image({
                        url: 'img/flight_oneway_big_3x.png',
                        ix: this.fixLeftValue(120),
                        iy: this.fixTopValue(198),
                        style: Object.assign({
                            width: this.fontSize(18),
                            height: this.fontSize(16)
                        })
                    }),
                    //预计到达标题
                    new Text({
                        content: flight_land_name,
                        style: Object.assign({
                            left: this.windowWidth - 2.7*this.fontSize(18) - this.measureText(this.flight_place(data.flight_info_list[0].flight_land_place, 3), this.fontSize(18)) - this.fontSize(16),
                            top: this.fixTopValue(157),
                            color: '#767676',
                            fontSize: this.fontSize(14)
                        })
                    }),
                    //预计到达城市
                    new Text({
                        content: this.flight_place(data.flight_info_list[0].flight_land_place, 3),
                        style: Object.assign({
                            left:this.windowWidth - 2.7*this.fontSize(18) - this.measureText(this.flight_place(data.flight_info_list[0].flight_land_place, 3), this.fontSize(18)) - this.fontSize(16),
                            top: this.fixTopValue(194),
                            color: '#200000',
                            fontSize: this.fontSize(18)
                        })
                    }),
                    //预计到达时间
                    new Text({
                        content: this.formatDate(flight_land_time, 'HH:mm'),
                        style: Object.assign({
                            left: this.windowWidth - 2.7 * this.fontSize(18),
                            top: this.fixTopValue(194),
                            color: '#509fc9',
                            fontSize: this.fontSize(18)
                        })
                    }),


                ]
        }
        newrext = new Rect({
            style: Object.assign(style['share-container'],{
                width:this.windowWidth,
            }),
            children: newarr
        })
        return newrext
    },
    draw(data) {
        Painter.draw([
            new Rect({
                style: Object.assign(style['share-container'],{
                    width:this.windowWidth,
                }),
                children: [
                    //航司名称
                    new Text({
                        content: data.flight_info_list[0].flight_airline,
                        style: Object.assign(style['main'], {
                            top: this.fixTopValue(3),
                            left: this.fixLeftValue(3),
                            fontSize: this.fontSize(14)
                        })
                    }),
                    //航班号
                    new Text({
                        content: '(' + data.flight_number + ')',
                        style: Object.assign(style['flight_number'], {
                            top:this.fixTopValue(3),
                            left:this.fixLeftValue(data.flight_info_list[0].flight_airline.length * this.fontSize(14) + 10),
                            fontSize: this.fontSize(14),
                            color: '#1aad19'
                        })
                    }),
                    //日期和星期
                    new Text({
                        content: '计划 ' + this.formatDate(data.flight_info_list[0].flight_plan_take_off_time, 'MM月dd日') + ' ' + this.toweek(data.flight_info_list[0].flight_plan_take_off_time, '周w'),
                        style: Object.assign(style['flight_date'], {
                            top: this.fixTopValue(27),
                            fontSize: this.fontSize(13),
                        })
                    })
                ]
            }),
            this.drawAlls(data)
        ])
    },
    drawDA(data) {
        if(data.flight_info_list.length == 1){
            data.flight_number = data.flight_info_list[0].flight_number
            this.draw(data)
        }else{
            Painter.draw(this.deparrsearch(data))
        }

    },
    deparrsearch(data) {
        var r = [];
        var sds = new Rect({
            style: Object.assign(style['share-container'],{
                width:this.windowWidth,
            }),
            children: [
                //航班查询
                new Text({
                    content: '航班查询',
                    style: Object.assign(style['main'], {
                        top: this.fixTopValue(3),
                        fontSize: this.fontSize(14)
                    })
                }),
                //航班号
                new Text({
                    content: '(' + data.flight_info_list[0].flight_take_off_place + '到' +  data.flight_info_list[0].flight_land_place +')',
                    style: Object.assign(style['flight_number'], {
                        top:this.fixTopValue(3),
                        left:this.fixLeftValue(65),
                        fontSize: this.fontSize(14),
                        color: '#1aad19'
                    })
                }),
                //日期和星期
                new Text({
                    content: '计划 ' + this.formatDate(data.flight_info_list[0].flight_plan_take_off_time, 'MM月dd日') + ' ' + this.toweek(data.flight_info_list[0].flight_plan_take_off_time, '周w'),
                    style: Object.assign(style['flight_date'], {
                        top: this.fixTopValue(31),
                        fontSize: this.fontSize(13),
                    })
                }),
                new Text({
                    content: this.comdto(data.flight_count),
                    style: Object.assign(style['flight_quan'], {
                        top: this.fixTopValue(200),
                        left: 3,
                        fontSize: this.fontSize(14),
                        color: '#888888'
                    })
                })
            ]
        })
        for (var i = 0; i < data.flight_info_list.length; i++) {
            var iop = new Rect({
                style: Object.assign(style['share-container'],{
                    width:this.windowWidth,
                }),
                children: [
                    new Text({
                        content: data.flight_info_list[i].flight_airline,
                        style: Object.assign(style['flight_quant'], {
                            left: 3,
                            top: this.fixTopValue(68) + this.fixTopValue(40) * i,
                            fontSize:this.fontSize(14),
                        })
                    }),
                    new Text({
                        content: data.flight_info_list[i].flight_take_off_place,
                        style: Object.assign(style['flight_quan'], {
                            top: this.fixTopValue(68) + this.fixTopValue(40) * i,
                            fontSize:this.fontSize(14),
                            left: this.fixLeftValue(85),
                            color:'#353535'
                        })
                    }),
                    new Text({
                        content: this.formatDate(data.flight_info_list[i].flight_plan_take_off_time, 'HH:mm'),
                        style: Object.assign(style['flight_quan'], {
                            top: this.fixTopValue(68) + this.fixTopValue(40) * i,
                            fontSize:this.fontSize(14),
                            left: this.fixLeftValue(147),
                            color:'#509FC9'
                        })
                    }),
                    //飞机icon
                    new Image({
                        url: 'img/flight_oneway_big_3x.png',
                        ix: this.fixLeftValue(204),
                        iy: this.fixTopValue(68) + this.fixTopValue(40) * i,
                        style: Object.assign({
                            width: this.fontSize(18),
                            height: this.fontSize(16)
                        })
                    }),
                    new Text({
                        content: data.flight_info_list[i].flight_land_place,
                        style: Object.assign(style['flight_quan'], {
                            top: this.fixTopValue(68) + this.fixTopValue(40) * i,
                            fontSize:this.fontSize(14),
                            left: this.fixLeftValue(240),
                            color:'#353535'
                        })
                    }),
                    new Text({
                        content: this.formatDate(data.flight_info_list[i].flight_plan_land_time, 'HH:mm'),
                        style: Object.assign(style['flight_quan'], {
                            top: this.fixTopValue(68) + this.fixTopValue(40) * i,
                            fontSize:this.fontSize(14),
                            left: this.fixLeftValue(303),
                            color:'#509FC9'
                        })
                    }),
                    //这里画一条虚线
                    new Line({
                        dashLen: 5,
                        lineWidth: 0.4,
                        xone: 0,
                        yone: 0,
                        xtwo: this.windowWidth,
                        ytwo: 0,
                        color: '#e3e3e3',
                        style: Object.assign({
                            top: this.fixTopValue(100) + this.fixTopValue(40) * i,
                        })
                    }),
                ]
            })
            if(i < 3){
                r.push(iop)
            }
        }
        r.push(sds)
        return r
    }
})
