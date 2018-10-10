var express = require('express');
var router = express.Router();
var db = require('../mongodb/config/mongoose');
var List = require('../mongodb/models/ListModel');
//设置跨域访问
router.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
// router.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
//   });
  
  let result=null;
  // 处理 /user/:id， 渲染一个特殊页面 /123/1
  router.get('/list', function (req, res, next) {
    // res.render('special');
    //console.log(req.params); //获取url后的参数
    console.log(req.query.id); //获取？后面的值
    // var content = {mname:'我的中国心',
    //                singer:'成龙',
    //                image:'images/home/1.jpg',
    //                description:'每日新歌：周笔畅变身神奇魔法师',
    //                info:'每日新歌：周笔畅变身神奇魔法师',
    //                sales:6.5}//数据
    //  var listInsert = new List(content);
 var tj = {}//查询条件
 db();//链接数据库
//  listInsert.save((err,data)=>{
//    console.log('1'+err)
//    console.log('2'+data)
//  })
 List.find(tj,(err,data)=>{
   if(err){
     console.log(err)
   }
   if(data){
     console.log('data')
     console.log(data)
     result=data
   }
 })
    // res.send('hello');
    res.json(result)
  });
  //home页面
  router.get('/home',(req, res, next)=>{
    var tj = {'image':{$exists: 1}}//查询条件
    var zd = {image:1,info:1,sales:1}//查询字段
    List.find(tj,zd,(err,data)=>{
      if(err){
        console.log(err)
      }
      if(data){
        console.log('data')
        console.log(data)
        result=data
      }
    })
       res.json(result)
  })
  module.exports = router;