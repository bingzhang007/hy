<?php
require("init.php");
@$count=$_REQUEST["count"]or die('{"code":-1,"msg":"数量是必须的"}');
@$pid=$_REQUEST["pid"] or die('{"code":-2,"msg":"商品id是必须的"}');
@$uid=$_REQUEST["uid"] or die('{"code":-3,"msg":"用户id是必须的"}');
$sql="INSERT INTO hy_cart VALUES(null,$uid,$pid,$count)";
$result=mysqli_query($conn,$sql);
if($result){
echo '{"code":1,"msg":"成功加入购物车"}';
}else{
echo '{"code":-4,"msg":"加入购物车失败"}';
}
?>