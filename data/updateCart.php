<?php
require("init.php");
@$cid=$_REQUEST["cid"]or die('{"code":-2,"msg":"cid是必须的"}');
@$count=$_REQUEST["count"]or die('{"code":-1,"msg":"数量是必须的"}');
$sql="UPDATA hy_cart SET num=$count WHERE cid=$cid";
$result=mysqli_query($conn,$sql);
if($result){
echo '{"code":1,"msg":"数量+1or-1"}';
}else{
echo '{"code":-3,"msg":"数量没变"}';
}
?>