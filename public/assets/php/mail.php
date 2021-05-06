<?php
$name = $_POST['name'];
$email =$_POST['email'];
$message = $_POST['message'];
$to ="khalifanmuwonge@gmail.com";
$subject = "From Dsa";
$msg ="Name:" . $name . "\r\n Email = " . $email .  "\r\n Message = " . $message;
$headers = "From noreply@dsagroug7.com" . "\r\n" . "CC: ";
if($email!=null){
 mail($to,$subject,$msg,$headers);
} 
//redirect to thank you
echo '<scipt type="text/javascript">';
echo 'alert("Thanks for reaching out")';
echo '</script>';

?>