$(function () {
    $("form#form").on('submit',function(event){
       event.preventDefault();
       let name = $("input#name").val();
      
       if ($("input#name").val()){
           alert ("Hey " + name + ", Thanks for reaching out, Delani will get back to you");
       }
       else {
           alert("Please provide your correct name and email!");
       }

   });



});