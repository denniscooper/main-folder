$(document).ready(function() {
         $('.select').msDropdown();
        $('#submit_btn').click(function() {
	$('.f_success').html("");
		var fname				=	$('#fname');
		var lname				=	$('#lname');
		var fselect			=	$('#fselect');

		var femail				=	$('#femail');
		var fphone				=	$('#fphone');
        var fcompany			=	$('#fcompany');
        var ftitle			    =	$('#ftitle');
		var fmessage			=	$('#fmessage');
		var fcheck				=	$('#fcheck');
		var fgender				=	$('.fgender');
	
				
		var error = 0;
		
				fname.css		({'border':'1px solid #060'});
				lname.css		({'border':'1px solid #060'});
				$('form .dd').css	({'border':'1px solid #060'});
				femail.css		({'border':'1px solid #060'});
				fphone.css		({'border':'1px solid #060'});
            	fcompany.css		({'border':'1px solid #060'});
            	ftitle.css		({'border':'1px solid #060'});
             fcheck.css		({'border':'1px solid #060'});
                fselect.css		({'border':'1px solid #060'});
				fmessage.css	({'border':'1px solid #060'});
				
				
				
				
			$('.errS').text('');
				
				// First Name 
				if($.trim($('#fname').val()) == 'First Name' || $('#fname').val() == '') {
					fname.css({'border':'1px solid #f00'});
					error = 1;
				}
				
				// Last Name 
				if($.trim($('#lname').val()) == 'Last Name' || $('#lname').val() == '') {
					lname.css({'border':'1px solid #f00'});
					error = 1;
				}
				
				// First Select drop down
				if($.trim($('#fselect').val()) == 'select' || $('#fselect').val() == '') {
					fselect.css({'border':'1px solid #f00'});
					error = 1;
				}
				
			
				 
				// E-mail 			
				if($('#femail').val() == 'E-Mail' || $('#femail').val() == '') {
					femail.css({'border':'1px solid #f00'});
					error = 1;
				}else {
					var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
					if(!emailPattern.test($('#femail').val())) {
						femail.css({'border':'1px solid #f00'});
						error = 1;
					}
				}
				
				// Phone Number 	
				if($.trim($('#fphone').val()) == 'Phone Number' || $('#fphone').val() == '') {
                    fphone.css({'border':'1px solid #f00'});
                    error = 1;
                }$("#fphone").keypress(function (e) {
					 if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
					 return false;
					}
				   });
            // Company Name
				if($.trim($('#fcompany').val()) == 'Company Name' || $('#fcompany').val() == '') {
					fcompany.css({'border':'1px solid #f00'});
					error = 1;
				}
             // Title
				if($.trim($('#ftitle').val()) == 'Title' || $('#ftitle').val() == '') {
					ftitle.css({'border':'1px solid #f00'});
					error = 1;
				}
            
				// First Select drop down
				if($.trim($('#fselect').val()) == 'fselect' || $('#fselect').val() == '') {
					$('form .dd').css({'border':'1px solid #f00'});
					error = 1;
				}
				

				
				// Check boxes 
				var fields = $('input[class=check1]:checked').serializeArray();
					if (fields.length == 0) {
						$('.check-label').css('color','red');  
						error = 1; 
				}else{
					$('.check-label').css('color','');
					}
					
				
					
				
				if(error) {
					$('.errS').text('Required : valid info.');
					return false;
				}
		
					$.ajax({
							url: 'http://html2.upupload.com/66292/31nlfob4f66292/submit.php',
							type : 'POST',
							data : $('#contact_form').serialize(),
							cache: false,
							
							success: function (data) {
									$('.f_success').html(data);
									$('.f_success').show();
									$('.errS').text('');
									fname.val('');
									lname.val('');
									
									femail.val('');
									fphone.val('');
                                    fcompany.val('');
                                    ftitle.val('');
                                  fselect.val('');
                                $('form .dd').css	({'border':'1px solid #060'});
								
									
							}
					});
					return false;
	
 });
 
});
