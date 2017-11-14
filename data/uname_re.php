<?php
require("init.php");
@$u=$_REQUEST["uname"] or die('{"code":-1,"msg":"请输入账户名"}');
//创建sql语句并发送
$sql="SELECT * FROM hy_user WHERE uname='$u'";
//抓取一行记录
$result=mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
//6:判断
//7:输出
if($row){
   echo '{"code":-2,"msg":"用户名已存在"}';
 }else{
   echo '{"code":1,"msg":"用户名可以使用"}';
 }
?>