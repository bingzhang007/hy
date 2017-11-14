//banner
$(()=>{
    var canMove=true;
    var moved=0,
        timer=null;
    function move(){
    if(canMove){
     timer=setInterval(()=>{
        moved++;
        if(moved>4){moved=0}
        $("#slider").children(`:eq(${moved})`).fadeIn("slow").siblings().fadeOut("slow");
        $("#index").children(`:eq(${moved})`).addClass("hover").siblings().removeClass("hover");
    },3000);
    }
    }
    move();

    $("#banner").hover(
        ()=>{
            clearInterval(timer);
            timer=null;
            canMove=false;
        },
        ()=>{
            canMove=true;
            move();
        }
    );
    $("#index").on("mouseover","li",e=>{
        var $li=$(e.target);
        $li.addClass("hover").siblings().removeClass("hover");
        moved=$li.index();
        $("#slider").children(`:eq(${moved})`).fadeIn("slow").siblings().fadeOut("slow");
    });
});
//品牌切换
$(()=>{
// 点击tab切换下方品牌list
var $brand=$("#brand_show");
$(".brand_toggle [data-toggle=tab]").click(e=>{
    e.preventDefault();
    var $li=$(e.target).parent();
    var i=$li.index();

    if(!$li.hasClass("active")){
        $li.addClass("active").siblings().removeClass("active")
    }
    var $brand=$("#brand_show");
    $brand.children(`:eq(${i})`).css("display","block").siblings().css("display","none");
});
// 点击按钮切换品牌list
var $a1=$("#brand_box>a.prev");
var $a2=$("#brand_box>a.next");
var $toggle=$(".brand_toggle>ul");
var $d=null;
var i=0;
 $a1.click(()=>{
     $d=$brand.children(":visible");
      i=$d.index();
    $d.css("display","none");
     if(i===0){
         $brand.children(":last").css("display","block");
         $toggle.children(":last").addClass("active").siblings().removeClass("active")
     }else{
         i--;
         $d.prev().css("display","block");
         $toggle.children(`:eq(${i})`).addClass("active").siblings().removeClass("active")
     }
 });
$a2.click(()=>{
     $d=$brand.children(":visible");
     i=$d.index();
    $d.css("display","none");
    if(i===2){
        $brand.children(":first-child").css("display","block");
        $toggle.children(":first").addClass("active").siblings().removeClass("active")
    }else{
        i++;
        $d.next().css("display","block");
        $toggle.children(`:eq(${i})`).addClass("active").siblings().removeClass("active")
    }
})
// 小轮播图
var imgs=[
    "img/ad1.jpg",
    "img/ad2.jpg",
    "img/ad3.jpg"
];
var $ulImgs=$(".brand_ad_img"),
    $ulIdxs=$(".brand_ad_index");

const LIWIDTH=219,
    INTERVAL=1000,
    WAIT=1000;
// 给slider添加内容
$ulImgs.html(
    `<li>
         <a >
              <img src="${imgs.join('"></a></li><li><a ><img src="')}
              "></a></li>`+`<li><img src="${imgs[0]}"></li>`
).css("width",LIWIDTH*(imgs.length+1));
$ulIdxs.html(
    ()=>{
        var str="";
        for(i=0;i<imgs.length;i++){
            str+=`<li></li>`
        }
        return str;
    }
).children(":first").addClass("hover");

var moved=0,
    timer=null,
    canMove=true;

// 设置轮播动画
    function move(){
        if(canMove){
            timer = setTimeout(()=> {
                moved++;

                $ulImgs.animate({
                    left: -LIWIDTH * moved
                }, INTERVAL, ()=> {
                    if (moved < imgs.length) {
                        $ulIdxs.children(`:eq(${moved})`).addClass("hover").siblings().removeClass("hover");
                    } else {
                        moved = 0;
                        $ulImgs.css("left", 0);
                        $ulIdxs.children(":first").addClass("hover").siblings().removeClass("hover")
                    }
                    move();
                });
            }, WAIT);
        }
    }
move();
$(".brand_ad").hover(
    ()=>{
        clearTimeout(timer);
        timer=null;
        canMove=false;
    },
    ()=>{
        canMove=true;
        move();
    }
);
$ulIdxs.on("mouseover","li",e=>{
    var $li=$(e.target);
    $li.addClass("hover").siblings().removeClass("hover");
    moved=$li.index();
    $ulImgs.stop(true).animate({left:-LIWIDTH*moved},INTERVAL);
});
});
// 左侧浮动导航
$(()=>{
var $left=$("#suspension");
$(window).scroll(()=> {
    var height=$(window).scrollTop();
        if(height>=600){
            $left.fadeIn();
        }else{
            $left.fadeOut();
        }
    }
    )
});
//倒计时
$(()=>{
    function checkTime(i) {
        if (i<10) {
            i = "0" +i;
        }
        return i;
    };
    var end=new Date("2017/11/2 17:00:00");
    setInterval(()=>{
            var now=new Date();
            var s=parseInt((end-now)/1000);
            var h=parseInt(s/3600);
            var m=parseInt(s%3600/60);
            s=s%60;
            h=checkTime(h);
            m=checkTime(m);
            s=checkTime(s);
        $(".limit_list li p").html(`
            <i class="iconfont icon-zhongbiao"></i> 剩余时间：${h}时${m}分${s}秒`)}
        ,1000)
});



