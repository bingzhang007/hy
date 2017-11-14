<?php
require("init.php");
@$brand=$_REQUEST["brand"];
@$sort=$_REQUEST["sort"];
@$price=$_REQUEST["price"];
@$effect=$_REQUEST["effect"];
@$pagenow=$_REQUEST["pagenow"]or die('{"code":-1,"msg":"页数是必须的"}');
$offset=($pagenow-1)*16;
$sql="SELECT * FROM hy_products WHERE pname LIKE '%$brand%' OR sort LIKE '%$sort%'";
$sql.=OR price BETWEEN  LIMIT $offset,16" ;
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);
?>