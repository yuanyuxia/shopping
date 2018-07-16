//获取验证码
var InterValObj; //定时器timer变量  控制时间
var count =60;//时间函数 1秒执行
var curCount;//当前剩余秒数

function sendMessage(){
    //初始时 剩余秒数等于 间隔函数总时长
    curCount = count;
    //开始计时
    $("#btnSendCode").attr("disabled","true");
    $("#btnSendCode").val(curCount + "s");
    InterValObj = window.setInterval(SetRemainTime,1000);//启动计时器 每一秒执行一次

}
//timer处理函数
function SetRemainTime(){
    if(curCount == 0){
        window.clearInterval(InterValObj);//停止计时器
        $("#btnSendCode").removeAttr("disabled");//启动按钮
        $("#btnSendCode").val("重新发送")
    }else{
        curCount--;
        $("#btnSendCode").val(curCount + "s");
    }
}



