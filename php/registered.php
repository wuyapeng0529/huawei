<?php
    header("Content-type:text/html;charset=utf-8");
    $zhanghao=$_GET["zhanghao"];
    $youxiang=$_GET["youxiang"];
    $mima=$_GET["mima"];
    $xing=$_GET["xing"];
    $ming=$_GET["ming"];
    $tel=$_GET["tel"];

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("registered");

    $result = mysql_query("select * from registered where zhanghao='$zhanghao'",$conn);

    if(mysql_num_rows($result) ==1){
		echo "账号已存在";
	}else{
    mysql_query("insert into registered (zhanghao,youxiang,mima,xing,ming,tel) values('$zhanghao','$youxiang','$mima','$xing','$ming','$tel')",$conn);
    echo "注册成功";
    }
    
    //4.关闭连接
    mysql_close($conn);
?>