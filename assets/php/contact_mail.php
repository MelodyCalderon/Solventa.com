
<?php

$name = $_POST["name"];
$name = ucfirst($name); //Primer Letra mayuscula
$email = $_POST["email"];
//$message = $_POST["message"];
$subject = $_POST["subject"];

 // Recipient email
 
 $toEmail = 'hello@solventa.com';
 $emailSubject = 'Ha llegado un mail desde Solventa.com';
 $htmlContent = '<h2>Información del Contacto</h2>
                <div>
                    <span style="color:#38383a; font-size:20px; font-weight:600">Name: </span>
                    <span style="color:#38383a; font-size:17px; ">'.$name.'</span>
                </div>
                <div>
                    <span style="color:#38383a; font-size:20px; font-weight:600">Email: </span><span style="color:#38383a; font-size:17px; ">'.$email.'</span>
                </div>
                <div>
                    <span style="color:#38383a; font-size:20px; font-weight:600">Telefono: </span><span style="color:#38383a; font-size:17px; ">'.$subject.'</span>
                </div>
               ';
 
 // Set content-type header for sending HTML email
 $headers = "MIME-Version: 1.0" . "\r\n";
 $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
 
 // Additional headers
 //$headers .= 'From: '.$name.'<'.$email.'>'. "\r\n";
 $headers .= 'From:'.'Solventa USA hello@solventa.com'. "\r\n";
 
 // Send email
 $success = mail($toEmail,$emailSubject,$htmlContent,$headers);

//

if ($success){

    // echo "<script type='text/javascript'>";
    // echo "document.getElementById('enviomailok').style.display = 'block';";
    // echo "</script>"; 
    console.log("mensaje enviado");  

}else{
    print "<p class='Error'>Mensaje no enviado.</p>";
}

?>


