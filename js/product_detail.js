// 预览图
(()=>{
// 点击小图切换中图片
$("#icon_list").on("mouseover","li",e=>{
    var $li=$(e.target);
    var src=$li.attr("src");
    var i=src.lastIndexOf(".");
    var mSrc=src.slice(0,i)+"_m"+src.slice(i);
    var lSrc="../"+src.slice(0,i)+"_l"+src.slice(i);
    $("#mImg").attr("src",`${mSrc}`);
    $("#largeDiv").attr("background",`${lSrc}`)
})
// 放大镜
var $a=$("#mediumDiv>a");
$("#superMask").hover(()=>{
     $a.css("display","none");
    $("#mask").css("display","block");
    $("#largeDiv").css("display","block");
},()=>{
    $a.css("display","block");
    $("#mask").css("display","none");
    $("#largeDiv").css("display","none");
})
const MWIDTH=175,
      SWIDTH=350;
$("#superMask").mousemove(e=>{
    var x=e.offsetX-MWIDTH/2,
        y=e.offsetY-MWIDTH/2,
        maxX=SWIDTH-MWIDTH,
        maxY=SWIDTH-MWIDTH;

    if(x<0){x=0}else if(x>maxX){x=maxX}
    if(y<0){y=0}else if(y>maxY){y=maxY}
    $("#mask").css({left:x, top:y});
    $("#largeDiv").css({
        backgroundPositionX:-16/7*x,
        backgroundPositionY:-16/7*y
    })
})
})();
//商品数量变化
$(()=>{
    //选择商品净含量
//     var clicked=0;
// $(".choose_weight a").click(function(){
//     clicked++;
//     if(clicked%2!=0){
//         $(this).addClass("on");
//     }else{
//         $(this).removeClass("on");
//     }
// });
//商品数量变化
$(".add").click(()=>{
    var n=Number($(".amount").val());
    if(n<14){
    $(".amount").val(n+1);}
})
$(".minus").click(()=>{
    var n=Number($(".amount").val());
    if(n>1){
        $(".amount").val(n-1);
    }
});
$(".amount").blur( ()=>{
        if($(".amount").val()>14){
            $(".kucun").css("display","block");
            $(".buy").addClass("disabledForBuy");
            $(".add_cart").addClass("disabledForAddCart");
        }else{
            $(".kucun").css("display","none");
            $(".buy").removeClass("disabledForBuy");
            $(".add_cart").removeClass("disabledForAddCart");
        }
    })


});
// 商品详情和累计评价切换
$(()=>{
    $(".main_tabs").on("click","[data-toggle=tab]",e=>{
        e.preventDefault();
        var $tar=$(e.target);
        var $li=$tar.parent();
        if(!$li.is(".active") ){
            $li.addClass("active").siblings().removeClass("active");
            var id=$tar.attr("href");
            $(`${id}`).css("display","block").prevAll().css("display","none");

        }
    });
    //已有评价
    $(".pj_count").click(
        ()=>{
            $(".main_tabs .ljpj").addClass("active").siblings().removeClass("active");
            $("#comment_list").css("display","block").prevAll().css("display","none");
        }
    );
});
//各类评价切换
(()=>{
    // 默认排序评价加载


    $(".filter_list").on("click","[data-toggle=tab]",e=>{
        e.preventDefault();
        var $li=$(e.target).parent();
        if(!$li.is(".active")){
            $li.addClass("active").siblings().removeClass("active");
        }
    })
})();
// 猜你喜欢
$(()=>{
    var  imgs=[
        "products/p_43.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_42.jpg",
        "products/p_43.jpg",
        "products/p_42.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg",
        "products/p_43.jpg"
    ],
     i=imgs.length, $ul= $(".userLike_box>ul");
    $ul.html(
        ()=>{
            var str="";
            for(i =0;i<imgs.length;i++){
                str+=`<li>
                        <a >
                            <img src="`+imgs[i]
                            +`" >
                            <p>溢彩年华 原木生活实木加粗衣帽架 卧室办公挂衣架 落地晾衣架 DKC5548</p>
                        </a>
                        <h3>￥99.00</h3>
                    </li>`
            }
            return str;
        }
    )
    const WIDTH=186;
    var move=0;
    var $b=$("#user_like p b")
    $ul.css("width",`${WIDTH*i}`);
        $(".userLike_prev").click(e => {
            if(!$(".userLike_prev").is(".disabled")) {
                e.preventDefault();
                move++;
                $ul.animate({left:40+WIDTH * move*6},500);
                checkA();
                $b.text(-move+1);
            }
        });
        $(".userLike_next").click(e => {
            e.preventDefault();
            if(!$(".userLike_next").is(".disabled")){
            move--;
            $ul.animate({left:40+WIDTH*move*6},500);
            checkA();
                $b.text(-move+1);
            }
        });



   if(i<=6){
       $(".userLike_box>a").addClass("disabled")
   }
   // 检查按钮是否可按
   function checkA(){
       if(move==0){
           $(".userLike_prev").addClass("disabled");
       }else if(move==-3){
           $(".userLike_next").addClass("disabled");
       }else{
           $(".userLike_box>a").removeClass("disabled")
       }
   }
});
//推荐排序 /按时间排序
$(()=>{
    $(".comment_tabs p").hover(function(){
        $(".sort").css("display","block");
    },function(){
        $(".sort").css("display","none");
    });
    $(".sort").mouseover(()=>{
        $(".sort").css("display","block");
    });
    $(".sort").mouseout(()=>{
        $(".sort").css("display","none");
    });
    });
// 立即购买和添加到购物车
$(()=>{
    // 立即购买
    $(".buy").click(()=>{
      // sessionStorage["pid"]=117;
      var n=$(".amount").val();
      // sessionStorage["count"]=n;
      location.href="order_payment.html?pid=234&count="+n;
    });
    //添加到购物车
    $(".add_cart").click(()=>{
        var n=$(".amount").val();
        $.ajax({
            url:"data/addCart.php",
            type:"POST",
            data:{uid:1,pid:234,count:n},
            success:function(data){
                if(data.code>0){
                    console.log("成功加入购物车");
                }else{
                    console.log("加入购物车失败");
                }
            },
            error:function(){
                alert("网络连接故障");
            }
        })

    });

});
