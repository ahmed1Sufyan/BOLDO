
jQuery('#form').validate({

    rules:{
        name:{
          required:true,
          minlength:6
        },
        email:"required",
        pass:{
          required:true,
          minlength:11
        }
        
    },messages:{
        name:{
          required:"please enter your First number",
          minlength:"Must be 6 char long"
        },
        
        email:"Enter your email",
        pass:{
          required:"please enter your Password",
          minlength:"Password must be 8 digit long"
        },

    }

});
