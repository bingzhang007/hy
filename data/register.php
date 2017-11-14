<?php
require("init.php");
@$u=$_REQUEST["uname"] or die('{"code":-1,"msg":"请输入账户名"}');
@$p=$_REQUEST["upwd"] or die('{"code":-2,"msg":"请输入密码"}');
//创建sql语句并发送
$sql="INSERT INTO hy_user VALUES(null,'$u','$p')";
$result=mysqli_query($conn,$sql);
//6:判断
//7:输出
if($result){
   $sql2="SELECT uid FROM hy_user WHERE uname='$u'";
   $result2=mysqli_query($conn,$sql2);
   $row2 = mysqli_fetch_assoc($result2);
   if($row2){
      $uid=$row2['uid'];
      echo '{"code":1,"msg":"注册成功","uid":'.$uid.'}';
    }

 }else{
   echo '{"code":-1,"msg":"请检查网络问题"}';
 }
?>