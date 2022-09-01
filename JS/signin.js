
jQuery('#form').validate({




    rules:{
        email:"required",
     pass:{
        required:true,
        minlength:5
         },
        
    },messages:{
        email:"Please Enter your Valid Email",
        pass:{
            required:"Please Enter your password",
            minlength:"Password Must be 6 char long"
        }
    }


  

});
