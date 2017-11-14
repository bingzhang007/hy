<?php
require("init.php");
@$u=$_REQUEST["uname"] or die('{"code":-1,"msg":"请输入账户名"}');
@$p=$_REQUEST["upwd"] or die('{"code":-2,"msg":"请输入密码"}');
//创建sql语句并发送
$sql="SELECT * FROM hy_user WHERE uname='$u' AND upwd='$p'";
//抓取一行记录
$result=mysqli_query($conn,$sql);
 $row = mysqli_fetch_assoc($result);
//6:判断
//7:输出
if($row===null){
   echo '{"code":-3,"msg":"账户名与密码不匹配，请重新输入"}';
 }else{
   $uid = $row['uid'];
   echo '{"code":1,"msg":"登录正确","uid":'.$uid.'}';
 }
?>