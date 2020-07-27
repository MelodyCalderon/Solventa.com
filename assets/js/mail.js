$(document).ready(function() {
    $('form').submit(function(event) {
       event.preventDefault();

      var form = $('form');
      $.ajax({
          type : "POST",
          url : "assets/php/contact_mail.php",
          data: form.serialize(),
        
          success:function(data){
              
              //Clear Input Values
              $("#name, #email, #message").val("");

          },
      });
      
              
    }); 
 });