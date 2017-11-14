<?php
require("init.php");
@$uid=$_REQUEST["uid"] or die('{"code":-1,"msg":"用户id是必须的"}');
$sql="SELECT c.cid,c.num,p.pname,p.price,p.pic,p.attr FROM hy_products p,hy_cart c WHERE p.pid=c.pid AND uid=1";
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
if($rows){
echo json_encode($rows);
}else{
echo '{"code":-2,"msg":"购物车为空"}';
}
?>