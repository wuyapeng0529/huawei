<?php
    header("Content-type:text/html;charset=utf-8");
    $zhanghao=$_GET["zhanghao"];
    $mima=$_GET["mima"];

    $conn = mysql_connect("localhost","root","root");

    mysql_select_db("registered");

    $result = mysql_query("select * from registered where zhanghao='$zhanghao' and mima='$mima'",$conn);

    if(mysql_num_rows($result) ==1){
		echo "登录成功";
	}else{
        echo "账号未注册";
    }
    

    //4.关闭连接
    mysql_close($conn);
?>