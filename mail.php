<?php 
require 'phpmailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$names = $_POST['names'];
$phones = $_POST['phones'];
$mailes = $_POST['mailes'];
$velo = $_POST['velo'];
$akses = $_POST['akses'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'asponica89@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Avakimo7'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('asponica89@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('akimovy14072018@yandex.ru');
$mail->addAddress('fyukaov@bk.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на покупку с сайта ВелоПрофи';
$mail->Body    = '' .$names . ' оставил заявку<br>Его телефон: ' .$phones. '<br>Почта этого пользователя: ' .$mailes.'<br>Заявка на велосипед: '.$velo.'<br>Заявка на аксессуар: '.$akses;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}



?>