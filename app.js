//项目主程序
//1:加载相关模块 http express mysql qs
const http = require("http");
const express = require("express");
const mysql = require("mysql");
const qs = require("querystring");
//2:创建连接池  25
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"shiguangshe",
    port:3306,
    connectionLimit:25
});
//3:创建express对象
var app = express();
//4:创建服务器对象
var server = http.createServer(app);
//5:绑定监听端口
server.listen(8081);
//你指需要指定(目录)  public
app.use(express.static("public"));



//模块一
//用户注册 reg
//uid,uname,uaacount,upwd,upic,uaddr
app.get('/regcheck',(req,res)=>{
    var acc=req.query.uaccount;
    console.log(acc)
    pool.getConnection((err, conn)=>{
        var sql="select uaccount from userlist where uaccount=?";
        conn.query(sql,[acc],(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json({code: -1, msg: "用户名已存在"})
            }else{
                res.json({code: 1, msg: "用户名可用"})
            }
            conn.release();
        })
    })
})

app.get('/reg',(req,res)=>{
    var up=req.query.upwd;
    var acc=req.query.uaccount;
    console.log(acc,up)
    pool.getConnection((err, conn)=>{
        var sql="insert into userlist values(null,'请设置昵称',?,?,'image/user/2.jpg','','','')";
        conn.query(sql,[acc,up],(err,result)=>{
            if (err)throw err;
            if(result.affectedRows>0){
                res.json({code: 1, msg: "注册成功"})
                conn.release();
            }
        })
    })
})
//完善个人资料

app.get('/uDetailSle',(req,res)=>{
    var acc=req.query.uaccount;
    console.log(acc);
    pool.getConnection((err, conn)=>{
        var sql="select * from userlist where uaccount=?";
        conn.query(sql,[acc],(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
                conn.release();
            }
        })
    })
})

app.get('/uDetailUpdate',(req,res)=>{

    var un=req.query.uname;
    var up=req.query.uphone;
    var ua=req.query.uaddr;
    var ue=req.query.uaccept;
    var uc=req.query.uaccount;
    //console.log(acc,up)
    pool.getConnection((err, conn)=>{
        var sql2="update userlist set uname=?,uphone=?,uaddr=?,uaccept=? where uaccount=?";
        conn.query(sql2,[un,up,ua,ue,uc],(err,result)=>{
            if (err)throw err;
            if(result.affectedRows>0){
                console.log(result)
                res.json({code: 1, msg: "更新成功"})
                conn.release();
            }
        })
    })
})




//模块二：用户登录
//aac,pwd
app.get('/login',(req,res)=>{
    var aac=req.query.uaccount;
    var pwd=req.query.upwd;
    console.log(aac,pwd)
    //2获取连接池中一个链接
    pool.getConnection((err, conn)=>{
        var sql="select * from userlist where uaccount=? and upwd=?";
        conn.query(sql,[aac,pwd],(err,result)=>{
            if (err)throw err;
            if(result.length<1){
                res.json({code: -1, msg: "用户名或密码错误"})
            }else{
                res.json({code: 1, msg: "登录成功"})
            }
            conn.release();
        })
    })
})

//模块三:菜谱
app.get('/list',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select * from dish";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
app.get('/listDetail',(req,res)=>{
    var di=req.query.did;
    pool.getConnection((err, conn)=>{
        var sql="select * from dish where did=?";
        conn.query(sql,[di],(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
app.get('/list1',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select * from dish where kid=(select kid from dish_kind where kname='家常菜')";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
app.get('/list2',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select * from dish where kid=20";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
app.get('/list3',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select * from dish where kid=30";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
app.get('/list4',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql='select * from dish where kid=40';
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})

//模块四：集市 商城
app.get('/product',(req,res)=>{
    pool.getConnection((err, conn)=>{
        //var sql="select p.pid,p.pname,p.pprice,p.pinfo,c.cid from product p,classify c where c.cid=1 and p.cid=1";
        var sql="select pid,pname,pprice,pinfo,cid,ppic from product";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
});
//集市搜索框
app.get('/storeSearch',(req,res)=>{
    var kw=req.query.kwd;
    console.log(kw)
    pool.getConnection((err, conn)=>{
        var sql="select * from product where pname like ?";
        conn.query(sql,['%'+kw+'%'],(err,result)=>{
            if (err)throw err;
            if(result.length==0){
                res.json([{code:-1,msg:"没有搜索结果"}])
            }else{
                res.json(result)
            }
        })
    })
})
//集市详情
app.get('/storeDetail',(req,res)=>{
    //console.log(req.query)
    var pi=req.query.pid;
    //console.log(pi)
    pool.getConnection((err, conn)=>{
        var sql="select * from product where pid=?";
        conn.query(sql,[pi],(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result);
            }
            conn.release();
        })
    })
})


//模块五：饭范
app.get('/discuss',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select * from talk";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>1){
                res.json(result)
            }
            conn.release();
        })
    })
})



//模块五：首页各模块
// 轮播
app.get('/slider',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select ppic,pid from product limit 0,3";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
//饭范
app.get('/discussList',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select tpic_lg,tid from talk limit 2,2";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})


//强势围观
app.get('/storeList',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select ppic,pid,pname from product limit 4,2";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})

//首页菜谱
app.get('/indexList',(req,res)=>{
    pool.getConnection((err, conn)=>{
        var sql="select did,dpic,dname from dish limit 6,2";
        conn.query(sql,(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
//toDisscuss 饭范
app.get('/toDiscuss',(req,res)=>{
    var ti=req.query.tid;
    pool.getConnection((err, conn)=>{
        var sql="select * from talk where tid=?";
        conn.query(sql,[ti],(err,result)=>{
            if (err)throw err;
            if(result.length>0){
                res.json(result)
            }
            conn.release();
        })
    })
})
//首页搜索框
app.get('/indexSearch',(req,res)=>{
    var kw=req.query.kwd;
    console.log(kw)
    pool.getConnection((err, conn)=>{
        var sql="select * from dish where dname like ? or dmaterial like ?";
        //var sql="select * from dish where dname like ?";
        conn.query(sql,['%'+kw+'%','%'+kw+'%'],(err,result)=>{
            if (err)throw err;
            if(result.length==0){
                console.log(1)
                res.json([{code:-1,msg:"没有搜索结果"}])
            }else{
                console.log(2)
                res.json(result)
            }
        })
    })
})
//购物车================
//加入购物车
app.get('/addcart',(req,res)=>{
    var uacc=req.query.uaccount;
    var pid=req.query.pid;
    pool.getConnection((err, conn)=>{
        var sql1="select * from cart where uaccount=? and pid=?";
        conn.query(sql1,[uacc,pid],(err,result)=>{
            if (err)throw err;
            if(result.length==0){
                var sql2="insert into cart values(null,?,?,1,now())";
                conn.query(sql2,[uacc,pid],(err,result)=>{
                    if (err)throw err;
                    if(result.affectedRows>0){
                        res.json([{code:1,msg:"插入成功=1",count:1}])
                    }else{
                        res.json([{code:-1,msg:"插入不成功"}])
                    }
                    conn.release();
                })
            }else{
                var sql3="update cart set dishCount=dishCount+1 where pid=?";
                conn.query(sql3,[pid],(err,result)=>{
                    if (err)throw err;
                    if(result.affectedRows>0){
                        res.json([{code:2,msg:"更新成功"}])
                    }else{
                        res.json([{code:-2,msg:"更新不成功"}])
                    }
                    conn.release();
                })
            }
        })
    })
})
//点击删除购物车的物品
app.get('/cartdel',(req,res)=>{
    var uacc=req.query.uaccount;
    var pid=req.query.pid;
    pool.getConnection((err, conn)=>{
        var sql="delete from cart where pid=? and uaccount=?";
        conn.query(sql,[pid,uacc],(err,result)=>{
            if (err)throw err;
            if(result.affectedRows>0){
                res.json([{code:1,msg:"购物车删除成功"}])
            }
            conn.release();
        })
    })
})

//购物车详情
app.get('/cart',(req,res)=>{
    var uacc=req.query.uaccount;
    pool.getConnection((err, conn)=>{
        var sql="select c.dishcount,p.pname,p.pprice,p.ppic,p.pid from cart c,product p where uaccount=? and p.pid=c.pid";
        conn.query(sql,[uacc],(err,result)=>{
            if (err)throw err;
            if(result.length==0){
                res.json([{code:-1,msg:"购物车空空如也"}])
            }else{
                res.json(result)
            }
            conn.release();
        })
    })
})

//更新订单==========
app.get('/order',(req,res)=>{
    var uacc=req.query.uaccount;
    var coun=req.query.hash;
    //console.log(coun);
    coun=JSON.parse(coun)
    console.log(typeof coun)
    pool.getConnection((err, conn)=>{
        if(JSON.stringify(coun)=='{}'){
            res.json({code:1,msg:"下单成功"})
            return;
        }
        for(var key in coun){
            key=Number(key)
            console.log(coun[key]+"对应"+key)
        var sql="update cart set dishCount=? where uaccount=? and pid=?";
        conn.query(sql,[coun[key],uacc,key],(err,result)=>{
            if (err)throw err;
            if(result.length==0){
                res.json({code:-1,msg:"下单失败"})
            }else{
                res.json({code:1,msg:"下单成功"})
            }
            conn.release();
        })
        }
    })
})


//我的订单中心
app.get('/myorder',(req,res)=>{
    var uacc=req.query.uaccount;
    pool.getConnection((err, conn)=>{
        var sql="select p.pname,p.ppic,p.pid,c.ctime,c.ctid,c.uaccount,c.dishCount from product p,cart c where c.uaccount=? and c.pid=p.pid";
        conn.query(sql,[uacc],(err,result)=>{
            if (err)throw err;
            if(result.length==0){
                res.json({code:-1,msg:"查询订单失败"})
            }else{
                res.json(result)
            }
            conn.release();
        })
    })
})



//捕捉所有未处理的异步错误
process.on('uncaughtException',(err)=>{
    console.dir(err)
})