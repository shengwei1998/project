const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

//引入相关的路由js文件,得到路由中间件函数
const userRouter = require('./routes/userRouter');
const indexRouter = require('./routes/indexRouter');
const bannerRouter = require('./routes/bannerRouter');

//设置静态资源托管的文件夹
app.use(express.static(path.resolve(__dirname,'./public')));

//设置使用cookie中间件
app.use(cookieParser());

//设置模板页面的存放路径与使用何种模板引擎
app.set('views',path.resolve(__dirname,'./views'));
app.set('view engine','ejs');

app.use('/user',userRouter);
app.use('/',indexRouter);
app.use('/banner',bannerRouter);


app.listen(3000);