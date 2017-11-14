<?php
//生成图片验证码
//要求 80*35 大写字母+数字 多种背景色 干扰点不太乱 里面字比较大

session_start();
//开启session记录验证码数据

vCode(4, 15);//设置验证码的字符个数和图片基础宽度

//vCode 字符数目，字体大小，图片宽度、高度
function vCode($num = 4, $size = 20, $width = 80, $height = 35) {

 //!$width && $width = $num * $size * 4 / 5 + 15;

 //!$height && $height = $size + 10;


 //设置验证码字符集合
 $str = "23456789abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVW";
 //保存获取的验证码
 $code = '';

 //随机选取字符
 for ($i = 0; $i < $num; $i++) {
  $code .= $str[mt_rand(0, strlen($str)-1)];
 }

 //创建验证码画布
 $im = imagecreatetruecolor($width, $height);

 //背景色
 $back_color = imagecolorallocate($im, 245,188,162);

 //文本色
 $text_color = imagecolorallocate($im, 68,65,65);

 imagefilledrectangle($im, 0, 0, $width, $height, $back_color);


  // 画干扰线
 for($i = 0;$i < 5;$i++) {
  $font_color = imagecolorallocate($im, mt_rand(0, 255), mt_rand(0, 255), mt_rand(0, 255));
  imagearc($im, mt_rand(- $width, $width), mt_rand(- $height, $height), mt_rand(30, $width * 2), mt_rand(20, $height * 2), mt_rand(0, 360), mt_rand(0, 360), $font_color);
 }

  // 画干扰点
 for($i = 0;$i < 50;$i++) {
  $font_color = imagecolorallocate($im, mt_rand(0, 255), mt_rand(0, 255), mt_rand(0, 255));
  imagesetpixel($im, mt_rand(0, $width), mt_rand(0, $height), $font_color);
 }

 //随机旋转角度数组
 $array=array(5,4,3,2,1,0,-1,-2,-3,-4,-5);

  // 输出验证码
 // imagefttext(image, size, angle, x, y, color, fontfile, text)
 @imagefttext($im, $size , array_rand($array), 12, $size + 6, $text_color, 'c:\WINDOWS\Fonts\simsun.ttc', $code);
 $_SESSION["VerifyCode"]=$code;
 //no-cache在每次请求时都会访问服务器
 //max-age在请求1s后再次请求会再次访问服务器，must-revalidate则第一发送请求会访问服务器，之后不会再访问服务器
 // header("Cache-Control: max-age=1, s-maxage=1, no-cache, must-revalidate");
 header("Cache-Control: no-cache");
 header("Content-type: image/png;charset=gb2312");
 //将图片转化为png格式
 imagepng($im);
 imagedestroy($im);
}

?>