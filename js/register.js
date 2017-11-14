var uNameT=false,uPwdT=false,uPwdRT=false,codeT=false;
$(()=>{
    $("#register tbody ").on("focus","tr.input",e=>{
        e.preventDefault();
        var $tr=$(e.target).parent().parent();
        if ($tr.next().hasClass("input_tip")){
            $tr.next().addClass("visible");

        }
    })
    $("#register tbody ").on("blur","tr.input",e=>{
        e.preventDefault();
        var $tr=$(e.target).parent().parent();
        var str=$(e.target).val();
        if(!str){
            $tr.next().removeClass("visible");

        }
    })
})
//验证用户名
$(()=>{
    var $tipTxt= $(".uName_tip .tip_txt span ");
    $(".uName").blur(e=>{
        var str=$(e.target).val();
        var    reg1=/^.{4,20}$/,
        // 仅支持汉字、字母、数字、"-""_"的组合
            reg2=/^([\u4e00-\u9fa5]+|[\w]+|[-]+){4,20}$/ig,
            //用户名不能是纯数字，请重新输入
            reg3=/^\d{4,20}$/ig,

            bool1=reg1.test(str),
            bool2=reg2.test(str),
            bool3=reg3.test(str);
        if(str){
            $(".uName_tip").addClass("warning");
            // $(".uName_tip i").css({
            //     backgroundPositionX:-19,
            //     backgroundPositionY:-116
            // });
            // $(e.target).css("borderColor","#FB550C");
            $(e.target).addClass("border");
            // $tipTxt.css("color","#FB550C");
            if(!bool1){
                $tipTxt.text(`长度只能在4-20个字符之间`);
            }else if(!bool2){
                $tipTxt.text(`格式错误，仅支持汉字、字母、数字、"-""_"的组合`);
            }else if(bool3){
                $tipTxt.text("用户名不能是纯数字，请重新输入");
            }else if(bool2&&!bool3){
                //该用户名已注册，如果您是该用户，请 登录
                $.ajax({
                    type:"POST",
                    url:"data/uname_re.php",
                    data:{uname:str},
                    success:function(data){
                        if(data.code==-2){
                            $tipTxt.html(`该用户名已注册，如果您是该用户，请 <a href="login.html"> 登录</a>`);
                            $tipTxt.children().addClass("login")
                        }else if(data.code==1){
                            // $(".uName_tip i").css({
                            //     backgroundPositionX:-2,
                            //     backgroundPositionY:-133
                            // });
                            $tipTxt.text("用户名可以使用");
                            // $(e.target).css("borderColor","#ccc");
                            $(e.target).removeClass("border");
                            $(".uName_tip").removeClass("warning").addClass("success");
                            uNameT=true;
                        }
                    },
                    error:function(){
                        alert("网络连接错误");
                    }
                    })

            }
        }
    });
    $(".uName").focus(e=>{
        // $(".uName_tip i").css({
        //     backgroundPositionX:-2,
        //     backgroundPositionY:-116
        // });
        $(".uName_tip").removeClass("warning success");
        $tipTxt.text(`支持中文、字母、数字、"-""_"的组合，4-20个字符`);
        // $(e.target).css("borderColor","#ccc");
        $(e.target).removeClass("border");
    })

})
// 验证密码
$(()=>{
    var $tipTxt= $(".uPwd_tip .tip_txt span ");
    $(".uPwd").blur(e=>{
        var str=$(e.target).val();
        //字母+数字，字母+特殊字符，数字+特殊字符 安全强度适中，可以使用三种以上的组合来提高安全强度
        var reg1=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/ig,
            reg2=/^(?![-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]+$)(?![a-zA-Z]+$)[A-Za-z-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]{6,21}$/ig,
            reg3=/^(?![0-9]+$)(?![-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]+$)[0-9A-Za-z]{6,21}$/ig,
            bool1=reg1.test(str),
            bool2=reg2.test(str),
            bool3=reg3.test(str);
        //字母+数字+特殊字符  你的密码很安全
        var reg4=/^(?![0-9]+$)(?![a-zA-Z]+$)(?![-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]+$)[0-9A-Za-z-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]{6,21}$/ig,
            bool4=reg4.test(str);
        if(str){
            $(".uPwd_tip").addClass("visible warning");
            $(e.target).addClass("border");
            if(!/^.{6,20}$/ig.test(str)){
                $tipTxt.text(`长度只能在6-20个字符之间`);
            }else if(/^\d{6,20}$/ig.test(str)||/^[A-Za-z]{6,20}$/ig.test(str)||/^[-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]{6,20}$/ig.test(str)){
                $tipTxt.text("建议使用字母、数字和符号两种及以上组合");
                $(".uPwd_tip").addClass("weak");
                uPwdT=true;
            }else if(bool1||bool2||bool3){
                $(".uPwd_tip").removeClass("warning weak").addClass("middle")
                $tipTxt.text("可以使用三种以上的组合提高安全强度");
                $(e.target).removeClass("border");
                uPwdT=true;
            }else if(bool4){
                $(".uPwd_tip").removeClass("warning middle weak").addClass("strong");
                $tipTxt.text("你的密码很安全");
                $(e.target).removeClass("border");
                uPwdT=true;
            }
        }
    });
    $(".uPwd").focus(e=>{
        $(".uPwd_tip ").removeClass("weak warning middle strong");
        $tipTxt.text(`建议使用字母加数字或符号组合，6-20位字符`);
        $(e.target).removeClass("border");
    })

})
// 确认密码
$(()=>{
    var $tipTxt=$(".uPwd_repeat_tip span")
    //两次密码输入不一致，请重新输入
    $(".uPwd_repeat").blur(e=>{
        var p=$(".uPwd").val(),
            p_repeat=$(".uPwd_repeat").val();
        if(p_repeat) {
            if (p!=p_repeat) {
                $(".uPwd_repeat_tip").addClass("warning visible");
                $tipTxt.text("两次密码输入不一致，请重新输入");
                $(e.target).addClass("border");
            }else{
                $(".uPwd_repeat_tip").removeClass("visible warning")
                $(".uPwd_repeat").removeClass("border");
                uPwdRT=true;
            }
        }
    })
    $(".uPwd_repeat").focus(()=>{
        $(".uPwd_repeat_tip ").removeClass("warning")
        $tipTxt.text("请再次输入密码");
        $(".code").removeClass("border")
    })

})
//验证码
$(()=>{
    // 换一张
    $("#getCode").click(()=> {
        $("#codeImg").attr("src", 'data/code_char.php?tmp=' + Math.random());
    });

    var $tipTxt=$(".secuCode_tip span");

    $(".code").focus(()=>{
        $tipTxt.text("看不起清？点击图片更换验证码");
        $(".code").removeClass("border");
        $(".secuCode_tip").removeClass("warning");
    })
    $(".code").blur(()=>{
        var code=$(".code").val();
        if(code){
            $.post("data/form.php", {
                    code: code
                },
                function (msg) {
                    if (msg == 1) {
                        $(".secuCode_tip").css("visibility", "hidden");
                        codeT = true;
                        console.log(codeT)
                    } else {
                        $(".secuCode_tip").addClass("warning visible");
                        $(".secuCode_tip span").html("请按右图输入验证码，不区分大小写");
                        $(".code").addClass("border");
                    }
                })
        };
    })
})
//提交表单 注册成功，保存cookie
$(()=>{
    $("#btnRegister").click(e=>{
        e.preventDefault();
        var u=$(".uName").val(),
            p=$(".uPwd").val(),
            prp=$(".uPwd_repeat").val(),
            code=$(".code").val();
        // 验证是否为空
        if(!u){
            $(".uName_tip").addClass("warning visible");
            $(".uName").addClass("border");
            $(".uName_tip span").text("请输入用户名")
        }else if(!p){
            $(".uPwd_tip").addClass("warning visible");
            $(".uPwd").addClass("border");
            $(".uPwd_tip span").text("请输入密码");
        }else if(!prp){
            $(".uPwd_repeat").addClass("border visible");
            $(".uPwd_repeat_tip").addClass("warning");
            $(".uPwd_repeat_tip span").text("请再次输入密码");
        }else if(!code){
            $(".code").addClass("border");
            $(".secuCode_tip").addClass("warning visible");
            $(".secuCode_tip span").text("请输入验证码");
        }else {

            if (uNameT && uPwdRT && uPwdT && codeT) {
                $.ajax({
                    type: "POST",
                    url: "data/register.php",
                    data: {uname: u, upwd: p},
                    success: function (data) {
                        if (data.code===1) {
                            // 保存cookie
                            $.cookie("uId",data.uid,{expires:1,path: '/'});
                            $.cookie("uName",u,{expires:1,path: '/'});
                            // 返回上一页
                            var prevUrl=document.referrer;
                            if($.trim(prevUrl)==""){
                                location.href="index.html"
                            }else if(prevUrl.indexOf("127.0.0.1/hy")==-1){
                                location.href="index.html"
                            }else if(prevUrl.indexOf("login.html"!=-1)){
                                location.href="index.html"
                            }else{
                                location.href=prevUrl;
                            }

                        } else {
                            console.log(data.code);
                        }
                    },
                    error: function () {
                        alert("网络连接错误")
                    }


                })
            }
        }
    })

})