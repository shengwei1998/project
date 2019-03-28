//专门处理渲染ejs模板页面的路由文件
const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    //判断用户是否登录
    console.log(req.cookies);
    if(req.cookies.nickName){
        //存在
        res.render('home',{
            nickName:req.cookies.nickName
        });
    }else{
        //不存在
        res.redirect('/reg.html');
    }
    res.render('home');
})

router.get('/log.html',(req,res) => {
    res.render('log');
})

router.get('/reg.html',(req,res) => {
    res.render('reg');
})

module.exports = router;