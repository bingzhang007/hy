// 加载购物车内容
$(()=> {
    $.ajax({
        url: "data/cart.php",
        type: "GET",
        data: {uid: 1},
        success: function (data) {
            var str = "";
            for (var obj of data) {
                // var sum=obj.price*obj.num;
                str += `
                <li class="clear">
                <ul>
                        <li class="td_check"><input type="checkbox"></li>
                        <li class="td_info">
                            <a href="" class="lf"><img src="${obj.pic}" width="80"></a>
                            <p class="lf"><a href="">${obj.pname}</a></p>
                        </li>
                        <li class="td_sort">化妆品净含量：${obj.attr}</li>
                        <li class="td_price">￥${obj.price}</li>
                        <li class="td_amount">
                            <a class="${obj.cid}" id="menus"">-</a>
                            <input type="text" value="${obj.num}" class="lf" class="num">
                            <a  class="${obj.cid}" id="add"">+</a>
                        </li>
                        <li class="td_sum">${obj.price * obj.num}</li>
                        <li class="td_op">
                            <a  class="${obj.cid}">删除</a>&nbsp;&nbsp;&nbsp;<a href="">加入收藏</a>
                        </li>
                    </ul>
                    </li>
                `
            }
            $("#cart_content").html(str);
        },
        error: function () {
            alert("网络连接故障");
        }

    });
    // 购物车数量变化
    $("#add").click(
        e => {
            console.log(1)
            e.preventDefault();

            var n = $(".num").val();
            var cid = $("#add").attr("class");
            console.log(1,cid);
            $.ajax({
                url: "data/updateCart.php",
                type: "POST",
                data: {cid: cid, count: n + 1},
                success: function (data) {
                    $(".num").val(n + 1);
                    if (data.code > 0) {
                        console.log("更新成功");
                    }
                }

            })
        }
    );
    $("#menus").click(
        e=> {
            e.preventDefault();
            var n = $(".num").val();
            var cid = $("#menus").attr("name");
            console.log(1,cid);
            $.ajax({
                url: "data/updateCart.php",
                type: "POST",
                data: {cid: cid, count: n - 1},
                success: function (data) {
                    $(".num").val(n - 1);
                    if (data.code > 0) {
                        console.log("更新成功");
                    }
                }

            })
        }
    );
})