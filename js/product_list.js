// 今日推荐按钮
$(()=>{
    var  imgs=[
            "img/recommend1.jpg",
            "img/recommend2.jpg",
            "img/recommend3.jpg",
            "img/recommend4.jpg",
            "img/recommend5.jpg",
            "img/recommend6.jpg",
            "img/recommend7.jpg",
            "img/recommend8.jpg",
        ],
        i=imgs.length, $ul= $(".recommend_box>ul");
    $ul.html(
        `<li>
               <a ><img src="img/recommend1.jpg" alt=""></a>
               <div>
                    <p><a >美迪惠尔水库胶原蛋白套组20片</a></p>
                    <span>￥119.00</span>
                     <h6>热销：<span>4079</span>件</h6>
               </div>
        </li>
        <li>
               <a href="product_detail.html"><img src="img/recommend2.jpg" alt=""></a>
               <div>
                    <p><a href="product_detail.html">丽得姿保湿补水修复面膜10片</a></p>
                    <span>￥109.00</span>
                     <h6>热销：<span>5703</span>件</h6>
               </div>
        </li>
        <li>
               <a ><img src="img/recommend3.jpg" alt=""></a>
               <div>
                    <p><a >佑天兰(UTENA)经典果冻面膜组</a></p>
                    <span>￥78.00</span>
                     <h6>热销：<span>6216</span>件</h6>
               </div>
        </li>
        <li>
               <a ><img src="img/recommend4.jpg" alt=""></a>
               <div>
                    <p><a >美迪惠尔维他命胶原茶树超值套组</a></p>
                    <span>￥149.00</span>
                     <h6>热销：<span>2851</span>件</h6>
               </div>
        </li>
        <li>
               <a ><img src="img/recommend5.jpg" alt=""></a>
               <div>
                    <p><a >WONJIN EFFECT 3步补水炸弹面膜</a></p>
                    <span>￥99.00</span>
                     <h6>热销：<span>1344</span>件</h6>
               </div>
        </li>
        <li>
               <a ><img src="img/recommend6.jpg" alt=""></a>
               <div>
                    <p><a >御泥坊水润柔嫩黑膜套装28片</a></p>
                    <span>￥99.90</span>
                     <h6>热销：<span>1306</span>件</h6>
               </div>
        </li>
        <li>
               <a ><img src="img/recommend7.jpg" alt=""></a>
               <div>
                    <p><a >我的心机面膜大赏 23g x 22片</a></p>
                    <span>￥79.00</span>
                     <h6>热销：<span>4812</span>件</h6>
               </div>
        </li>
        <li>
               <a ><img src="img/recommend8.jpg" alt=""></a>
               <div>
                    <p><a >佑天兰经典果冻面膜组</a></p>
                    <span>￥99.00</span>
                     <h6>热销：<span>4598</span>件</h6>
               </div>
        </li>

`

    )
    const WIDTH=300;
    var move=0;
    $ul.css("width",`${WIDTH*i}`);
    $(".prev").click(e => {
        if(!$(".userLike_prev").is(".disabled")) {
            e.preventDefault();
            move++;
            if(move==1){move=-1};
            $ul.animate({left:WIDTH*move*4},500);
            $(".recommend_title>p>a.active").removeClass("active").siblings().addClass("active");

        }
    });
    $(".next").click(e => {
        e.preventDefault();
            move--;
            if(move==-2){move=0};
           $ul.animate({left:WIDTH * move*4},500);
        $(".recommend_title>p>a.active").removeClass("active").siblings().addClass("active");
    });

})
// 筛选 更多
$(()=>{
        var $more=$("#filter .more"),
            $dl=$(".filter_brand>dl"),
            $div=$(".filter_brand>div");
        var startHeight=Number($dl.css("height").slice(0,-2)),
            clicked=0;
        $more.click(e=>{
            e.preventDefault();
            clicked++;
            $dl.height("auto");
            var endHeight=$dl.height();
            if(clicked%2==1){
            $more.children(":last").attr("class","iconfont icon-shangjiantou");
            $dl.height(startHeight).animate({height:endHeight},500);
            $div.height(startHeight).animate({height:endHeight},500);
            }else if(clicked%2==0){
                $more.children(":last").attr("class","iconfont icon-xiajiantou");
                $dl.height(endHeight).animate({height:startHeight},500);
                $div.height(endHeight).animate({height:startHeight},500);
            }

        })
    })
// 点击筛选中的标签后，面包屑导航部分添加相应标签内容
$(()=>{
        var $ul=$("#filter dl ul");
        $ul.on("click","li",e=>{
            var $tar=$(e.target);
            var txt=$tar.text();

        })
    })
// 销量排行 手风琴
$(()=>{
    $("#rank>ul").on("mouseover","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })
})
//分页 ？？
$(()=>{
    // 默认分页
    function pageByAuto(pagenow){
        $.ajax({
            type:"GET",
            url:"data/product_list.php",
            data:{pagenow:pagenow},
            success:function(data){
                //拼字符串
                var html = "";
                $.each(data,function(idx,obj){
                    html += `
                         <li>
                    <a ><img src="${obj.pic}" alt=""></a>
                    <b>${obj.price}</b>
                    <p><a >${obj.pname}</a></p>
                    <span>月销 <b>${obj.sales}</b>件 </span>
                    <div>
                        <a  class="collect"><em></em>收藏</a>
                        <a  class="shop_cart"><em></em> 加入购物车</a>
                    </div>
                </li>
        `;
                });
                $(".pro_list").html(html);
            },
            error:function(data){
            alert("网络连接故障");
            }
        })
    }
    //按销量分页
    function pageBySales(pagenow){
        $.ajax({
            type:"GET",
            url:"data/productlist_bysales.php",
            data:{pagenow:pagenow},
            success:function(data){
                //拼字符串
                var html = "";
                $.each(data,function(idx,obj){
                    html += `
                         <li>
                    <a ><img src="${obj.pic}" alt=""></a>
                    <b>${obj.price}</b>
                    <p><a >${obj.pname}</a></p>
                    <span>月销 <b>${obj.sales}</b>件 </span>
                    <div>
                        <a  class="collect"><em></em>收藏</a>
                        <a  class="shop_cart"><em></em> 加入购物车</a>
                    </div>
                </li>
        `;
                });
                $(".pro_list").html(html);
            },
            error:function(data){
                alert("网络连接故障");
            }
        })
    }
    //按价格升序分页
        function pageByPriceUp(pagenow){
            $.ajax({
                type:"GET",
                url:"data/productlist_bypriceup.php",
                data:{pagenow:pagenow},
                success:function(data){
                    //拼字符串
                    var html = "";
                    $.each(data,function(idx,obj){
                        html += `
                         <li>
                    <a ><img src="${obj.pic}" alt=""></a>
                    <b>${obj.price}</b>
                    <p><a >${obj.pname}</a></p>
                    <span>月销 <b>${obj.sales}</b>件 </span>
                    <div>
                        <a  class="collect"><em></em>收藏</a>
                        <a  class="shop_cart"><em></em> 加入购物车</a>
                    </div>
                </li>
        `;
                    });
                    $(".pro_list").html(html);
                },
                error:function(data){
                    alert("网络连接故障");
                }
            })
        }
    // 按价格降序分页
        function pageByPriceDown(pagenow){
            $.ajax({
                type:"GET",
                url:"data/productlist_bysalesdown.php",
                data:{pagenow:pagenow},
                success:function(data){
                    //拼字符串
                    var html = "";
                    $.each(data,function(idx,obj){
                        html += `
                         <li>
                    <a ><img src="${obj.pic}" alt=""></a>
                    <b>${obj.price}</b>
                    <p><a >${obj.pname}</a></p>
                    <span>月销 <b>${obj.sales}</b>件 </span>
                    <div>
                        <a  class="collect"><em></em>收藏</a>
                        <a  class="shop_cart"><em></em> 加入购物车</a>
                    </div>
                </li>
        `;
                    });
                    $(".pro_list").html(html);
                },
                error:function(data){
                    alert("网络连接故障");
                }
            })
        }
    //按上架时间分页
        function pageByTime(pagenow){
            $.ajax({
                type:"GET",
                url:"data/productlist_bytime.php",
                data:{pagenow:pagenow},
                success:function(data){
                    //拼字符串
                    var html = "";
                    $.each(data,function(idx,obj){
                        html += `
                         <li>
                    <a ><img src="${obj.pic}" alt=""></a>
                    <b>${obj.price}</b>
                    <p><a >${obj.pname}</a></p>
                    <span>月销 <b>${obj.sales}</b>件 </span>
                    <div>
                        <a  class="collect"><em></em>收藏</a>
                        <a  class="shop_cart"><em></em> 加入购物车</a>
                    </div>
                </li>
        `;
                    });
                    $(".pro_list").html(html);
                },
                error:function(data){
                    alert("网络连接故障");
                }
            })
        }
    // 添加页码
    $.ajax({
        type:"GET",
        url:"data/totalpage.php",
        success:function(data){
            var count=data.page;
            var p=Math.floor(count/16);
            $(".page_total").html(p);
            var str="";
            if(p>=4){p=4}
            for(i = 1; i <= p; i++){
                    str += `<li>${i}</li>`
                }
            str+=`<li class="next_page">
                    <a >下一页</a>
                </li>
                `;
            $(".page").html(str);
        },
        error:function(data){
            alert("网络连接故障");
        }
    });
        //给页码1添加默认效果?????? 页码1找不到对象；
        $(".page").children(":first").addClass("page_on");
        console.log($(".page").children(":first"))
    pageByAuto(1);
    //选择排序方式
    $(".sort ul").on("click","li",function(){
        var str=$(this).attr("class");
        var clicked=0;
        var n=$(".page_on").html();
        console.log(str);
        if(str.indexOf("on")==-1){
            switch (str){
                case "pageByAUTO" : pageByAuto(n);break;
                case "pageBySales":pageBySales(n);break;
                case "pageByTime":pageByTime(n);break;
                case "pageByPrice": clicked++;
                    if(clicked%2==0){
                        pageByPriceDown(n);
                        $(this).children(".down").addClass("on").siblings().removeClass("on");
                    }else{
                        pageByPriceUp(n);
                        $(this).children(".up").addClass("on").siblings().removeClass("on");
                    }
            }
            $(this).addClass("on").siblings().removeClass("on");

        }
    })
    // 页码点击
    $(".page").on("click","li",e=>{
        var n=$(e.target).html();
        // 判断是哪种排序 填充内容
        var str=$(".sort li.on").attr("class");
        var clicked=0;
        switch (str){
            case "pageByAUTO" : pageByAuto(n);break;
            case "pageBySales":pageBySales(n);break;
            case "pageByTime":pageByTime(n);break;
            case "pageByPrice": clicked++;
                if(clicked%2==0){
                    pageByPriceDown(n);
                    $(".pageByPrice").children(".down").addClass("on").siblings().removeClass("on");
                }else{
                    pageByPriceUp(n);
                    $(".pageByPrice").children(".up").addClass("on").siblings().removeClass("on");
                }
        }
        //上方页码显示
        $(".page_now").html(n);
        //添加被点击状态
        if(!$(e.target).is(".page_on")){
        $(e.target).addClass("page_on").siblings().removeClass("page_on");
        }
        //页面中没有前一页且点击页码大于2时，添加上一页按钮
        if(!$(".page li").is(".prev_page")){
        if(n>=2){
            var str=`<li class="prev_page"><a >上一页</a></li>`;
            $(".page").prepend(str);
        }
        }else{
            if(n=1){
                $(".page .prev_page").remove();
            }
        }

    })
        var now=$(".page .page_on").html();
   //点击上一页
    $(".prev_page").click(
        ()=>{
            var str=$(".sort li.on").attr("class");
            var clicked=0;
            switch (str){
                case "pageByAUTO" : pageByAuto(now-1);break;
                case "pageBySales":pageBySales(now-1);break;
                case "pageByTime":pageByTime(now-1);break;
                case "pageByPrice": clicked++;
                    if(clicked%2==0){
                        pageByPriceDown(now-1);
                        $(".pageByPrice").children(".down").addClass("on").siblings().removeClass("on");
                    }else{
                        pageByPriceUp(now-1);
                        $(".pageByPrice").children(".up").addClass("on").siblings().removeClass("on");
                    }
            }
        }
    )
    //下一页
    $(".next_page").click(
        ()=>{
            var str=$(".sort li.on").attr("class");
            var clicked=0;
            switch (str){
                case "pageByAUTO" : pageByAuto(now+1);break;
                case "pageBySales":pageBySales(now+1);break;
                case "pageByTime":pageByTime(now+1);break;
                case "pageByPrice": clicked++;
                    if(clicked%2==0){
                        pageByPriceDown(now+1);
                        $(".pageByPrice").children(".down").addClass("on").siblings().removeClass("on");
                    }else{
                        pageByPriceUp(now+1);
                        $(".pageByPrice").children(".up").addClass("on").siblings().removeClass("on");
                    }
            }
        }
    )


}
)
//筛选？？？？
$(()=>{
    //
    $(".filter_brand ul").on("click","a",e=>{
        var brand=$(e.target).text();
        $.ajax({
            url:"data/filter.php",
            type:"GET",
            data:{brand:brand},
            success:function(data){
                
            },
            error:function(){
                alert("网络连接故障");
            }

        })
    }
    )
})


