 /*闭包*/
        (
function(){
   var $=function(_id){
          return document.getElementById(_id);
    }

var inpStyle=function(){
    var inp=document.getElementsByTagName("input");//获得id为inpList 中的所有的input
    for(i=0;i<inp.length;i++){
        inp[i].onfocus=function(){
        var par=this.parentNode.parentNode;//指向每一个ul
        var msg=par.getElementsByTagName("p")[0];//获取说明信息第一个段落p
        par.className="point";//给class=def重新赋为class="point" 当鼠标点击输入框的时候颜色变为绿色
        check.focus[this.id](par,this,msg);// 触发获得焦点  三个参数代表 ul标签 当前输入框 p
     }
        inp[i].onblur=function(){//失去焦点的时候执行什么  ul标签的class恢复 msg恢复为获取第一个段落p 判断input的输入是否符合要求
        var par=this.parentNode.parentNode;
        var msg=par.getElementsByTagName("p")[0];
        par.className="def";
        check.blurs[this.id](par,this,msg);
   }
}
    $("enter").onclick=function(){//提交注册时
        subback(inp);
  }
}

var check={
    focus:{
      uname:function(_ul,_this,_p){
          _ul.className="point";//改变输入框的颜色为蓝色
          
          },
          email:function(_ul,_this,_p){
          _ul.className="point";
          
          },
          mobile:function(_ul,_this,_p){
          _ul.className="point";
         
          },
          pwd:function(_ul,_this,_p){
          _ul.className="point";
          
          },
         
},
  blurs:{//失去焦点时
    uname:function(_ul,_this,_p){//上一个输入框的三个参数 ul标签、当前输入框、错误的信息
     _ul.className="error";    //当信息输入错误时执行error 使得输入框变为绿色    
     var flag=false;
    if(_this.value==""){        
      _p.innerHTML="<i></i>用户名不能为空！";
        }
        else if(_this.value.length<4 || _this.value.length>16){                                                                        
            _p.innerHTML="<i></i>用户名长度应控制在4-16位字符之间！";
      }
        else if(!/^[\w_-\u4e00-\u9fa5]+$/.test(_this.value)){       //用户名只能是数字，字母，下划线，-，.，中文组成的一个字串                                                                         
            _p.innerHTML = "<i></i>用户名只能由大小写字母，数字，下划线，中横线和中文组成！";
    }   
        else{
              _ul.className="ok";
              _p.innerHTML="<i></i>用户名输入正确!";
              flag=true;
          }
        return flag;
}
,
email:function(_ul,_this,_p){
         _ul.className="error";
          var flag=false;
      if(_this.value==""){
       _p.innerHTML="<i></i>邮箱不能为空！";
        }
        else if(!/\w+((-w+)|(\.\w+))*\@[\w]+((\.|-)[\w]+)*\.[\w]+/.test(_this.value)){                                                                        
              _p.innerHTML="<i></i>请输入正确的邮箱地址！";
          }
          else{
            _ul.className="ok";
            _p.innerHTML="<i></i>邮箱输入正确!";
            flag=true;
          }
                return flag;
}
,
mobile:function(_ul,_this,_p){
 _ul.className="error";
  var flag=false;
  if(_this.value==""){
    _p.innerHTML="<i></i>电话号码不能为空！";
  }else if(!/0?(13|14|15|18)[0-9]{9}/.test(_this.value)){                                                                        
          _p.innerHTML="<i></i>请输入正确的电话号码！";
          }
          else{
              _ul.className="ok";
              _p.innerHTML="<i></i>电话号码输入正确!";
              flag=true;
          }
            return flag;
}
,
pwd:function(_ul,_this,_p){
 _ul.className="error";
     var flag=false;
     if(_this.value==""){
     
      _p.innerHTML="<i></i>信息不能为空！";
      }else if(_this.value.length>200){
              
          _p.innerHTML="<i></i>信息应该在0-200之间！";
          }
      else{
          _ul.className="ok";
          _p.innerHTML="<i></i>信息输入正确";
          flag=true;
    }
      return flag;
}
  

  }
}
var subback=function(inps){

for(var i=0;i<inps.length;i++){
        //inps[i].focus();
        var flag=true;
        var par=inps[i].parentNode.parentNode;
        var msg=par.getElementsByTagName("p")[0];
        
        
        if(!check.blurs[inps[i].id](par,inps[i],msg)){
                flag=false;
                break;
                }
        }
        if(flag){
              alert("提交成功!");
              window.location.href= "http://www.bingyan.net" 
          }
        else{
              alert("请继续完善您的个人信息!");
      }
}
window.onload=function(){//程序的入口 

      inpStyle();
    }
  }
)();
