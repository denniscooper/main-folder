<?php
      


        $fname             	=       $_POST["fname"];    // NAME
        $flname         	=       $_POST["lname"];    //  Last Name
        $ftitle            	=       $_POST["ftitle"]; 	//Title
        $fcompany            =   $_POST["fcompany"]; 	//Company
		$femail          	=       $_POST["femail"];   // MAIL
        $fphone            	=       $_POST["fphone"]; 	//PHONE
        $fselect           =       $_POST["fselect"]; 
		
		

	

        $message         = '<table >';

        $message        .= '<tr><td>';
        $message        .= '<b>Hi,</b>';
        $message        .= '</td></tr>';

        $message        .= '<tr><td>';
        $message        .= '<b>Contact us form submitted online.</b>' ;
        $message        .= '</td></tr>';
		
        $message        .= '<tr><td>';
        $message        .= '<b>FIRST NAME 			:</b> '.$fname ;
        $message        .= '</td></tr>';
		
		$message        .= '<tr><td>';
        $message        .= '<b>LAST NAME 			:</b> '.$flname ;
        $message        .= '</td></tr>';
		
        $message        .= '<tr><td>';
        $message        .= '<b>TITLE		:</b> '.$ftitle ;
        $message        .= '</td></tr>';

        $message        .= '<tr><td>';
        $message        .= '<b>COMPANY  NAME		:</b> '.$fcompany ;
        $message        .= '</td></tr>';

		$message        .= '<tr><td>';
        $message        .= '<b>E-MAIL ID 			:</b> '.$femail;
        $message        .= '</td></tr>';
		
		$message        .= '<tr><td>';
        $message        .= '<b>PHONE NUMBER 		:</b> '.$fphone ;
        $message        .= '</td></tr>';

    

        $message        .= '<tr><td>';
        $message        .= '<b>Revenue Size			:</b> '.$fselect;
        $message        .= '</td></tr>';

		
		
        $message        .= '</table>';
		

$headers = 'MIME-Version: 1.0' . "\r\n";
//$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 		// This Line is Old 
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";				// This Line is New 


// Subject
$subject	= 'contact form';

// To Address
//$to			= "Deepti.srivastava@niit-tech.com,Amitabh.saikia@niit-tech.com,Pooja.joshi@niit-tech.com,dipesh@aspiredigi.com,Medps_2001@yahoo.com,Poojajoshi8715@gmail.com,Amit.mail11@gmail.com";
$to			= "dipesh@aspiredigi.com";

// Additional headers
$headers	.= 'From: '.$fname.' <'.$femail.'> ' . "\r\n";
//$headers	.= 'Cc: <email id here>' . "\r\n";
//$headers	.= 'Bcc: <email id here>' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);

echo 'Thank you. We will be in touch with you shortly.!';

?>
