// 登录功能
//账户名不存在，请重新输入
//账户名与密码不匹配，请重新输入
//匹配后，按钮文字改为 正在登录...登录成功后，保存cookie 然后跳转到前一页
// 创建一个1天的cookie
$(()=>{
    $("#btnLogin").click(e=>{
    var $btn=$(e.target);
    var u=$("[name='uname']").val();
    var p=$("[name='upwd']").val();
    var $tip=$(".input_tip"),
        $tipTxt=$(".tip_txt span");
    //判断是否输入
    if(!u) {
        $tip.css("visibility", "visible");
        $tipTxt.text("请输入账户名");
        $(".uName").focus().css("borderColor", "#FB550C");

    }else if(!p){
        $tip.css("visibility", "visible");
        $tipTxt.text("请输入密码");
        $(".uPwd").focus().css("borderColor", "#FB550C");
    }else{
        //按钮显示正在登录,将输入框变为不可用状态，避免重复提交
        $btn.attr("disabled",true).val("正在登录...");
        $(".uName").attr("disabled",true);
        $(".uPwd").attr("disabled",true);
    //发送ajax请求
    $.ajax({
        type:"POST",
        url:"data/login.php",
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code>0){
                // 登录成功，保存cookie
                $.cookie("uId",data.uid,{expires:1,path: '/'});
                $.cookie("uName",u,{expires:1,path: '/'});

                //如果勾选自动登录
                if($(".checkbox").is(":checked")){
                    // 将cookie时间改为7天
                    $.cookie("uName",u,{expires:7,path: '/'});
                    $.cookie("uId",data.uid,{expries:7,path: '/'});
                }
                // 跳转到原来页
                //判断从哪个页面来
                var prevUrl=document.referrer;
                if($.trim(prevUrl)==""){
                    location.href="index.html"
                }else if(prevUrl.indexOf("127.0.0.1/hy")==-1){
                    location.href="index.html"
                }else if(prevUrl.indexOf("register.html"!=-1)){
                    location.href="index.html"
                }else{
                    location.href=prevUrl;
                }
            }else{
                //登录失败，按钮返回原待登录状态
                $tip.css("visibility", "visible");
                $tipTxt.text(data.msg);
                $(".uPwd").focus().css("borderColor", "#FB550C");
                $btn.val("登录");
            }
        },
        error:function(){
            alert("网络连接错误，请检查");
        }
    })
    }
})});




