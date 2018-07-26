//引入mongoose组建
var mongoose = require('mongoose');
//创建模型
var listSchema = new mongoose.Schema({
    mname:{
        type:String,
        required:true}, //音乐名称
    singer:{type:String}, //歌手
    addtime:{
        type: Date,
        default: Date.now}, //发布日期
    image:{type:String}, //海报
    description:{type:String},//描述
    info:{type:String},
    sales:{type:Number},
   });
   module.exports = listSchema;