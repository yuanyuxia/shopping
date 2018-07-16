$(function () {
  fonts();
})
// 设置rem字体大小
function fonts() {
  /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
  var html = document.getElementsByTagName('html')[0];
  /*取到屏幕的宽度*/
  var width = window.innerWidth;
  var fontSize = parseInt(20 / 750 * width);
  /*设置fontsize*/
  html.style.fontSize = fontSize + 'px';
}
// 点击切换tab栏
function switchover(obj) {
  $(obj.nav_parent).find(obj.nav_label).click(function () {
    $(this).addClass(obj.nav_class).siblings().removeClass(obj.nav_class);
    obj.index = $(this).index();
    if (obj.con_parent && !obj.con_class) {
      $(obj.con_parent).eq(obj.index).show().siblings().hide();
    }
    if (obj.con_parent && obj.con_class) {
      $(obj.con_parent).eq(obj.index).addClass(obj.con_class).siblings().removeClass(obj.con_class);
    }
  })
}
//调用
// switchover({
//   nav_parent:"nav ul",
//   nav_label:'li',
//   nav_class:'active',
//   con_parent:'.con ul li',
//   con_class:'show'
// });



var window_url = window.location.href;
var obj = {"url":window_url};
// obj = JSON.stringify(obj); //对象转化为字符串
$.ajax({
type: "get",
url: "http://116.196.70.218:10100/client-web-wx/auth/wechat_pub/jsapi/config?id=110",
data:obj,
dataType: "jsonp",
success: function (res) {
console.log(res);
},
error: function (e) {
 layer.msg("请求失败") 
}
})

/* //ajax的post请求简单封装
function ajax_post(url,obj,func) {
  $.ajax({
    type: 'post',
    url: url,
    data: obj,
    dataType:'json',  
    success: func
  })
} */

var storage = {
  // 储存localStorage的值
  set:function(name,val){
    val = JSON.stringify(val);
    if(window.localStorage.hasOwnProperty(name)){
      window.localStorage[name] = val;
    }else{
      window.localStorage.setItem(name,val)
    }
  },
  //获取localStorage的值
  get:function(name){
    if(window.localStorage.hasOwnProperty(name)){
      return window.localStorage[name];
    }else{
      return null;
    }
  },
  //删除localStorage的值
  remove:function(name){
    if(window.localStorage.hasOwnProperty(name)){
      return window.localStorage.removeItem(name);
    }
  }
}

// 减运算，避免数据相除小数点后产生多位数和计算精度损失。
function subtractNum(arg1,arg2){
  return (arg1*1000-arg2*1000)/1000;
}
// 乘运算，避免数据相除小数点后产生多位数和计算精度损失。
function subNum(arg1,arg2){
  return (arg1*1000)*(arg2*1000)/1000000;
}
// 相加运算，避免数据相除小数点后产生多位数和计算精度损失。
function andNum(arg1,arg2){
  return ((arg1*1000)+(arg2*1000))/1000;
}
// 除，避免数据相除小数点后产生多位数和计算精度损失。
function divideNum(arg1,arg2){
  return ((arg1*1000)/(arg2*1000));
}
//获取地址栏参数值
function getUrlParms(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)
  return unescape(r[2]);
  return null;
}

//设置body的高度最小为终端高度
function min_height(){
  if($("html body").height() < $(window).height()){
    $("html body").height($(window).height());
  }
}