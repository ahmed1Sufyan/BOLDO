
jQuery('#form').validate({

    rules:{
        fname:{
          required:true,
            minlength:6
        },
        lname:{
          required:true,
          minlength:6
        },
        email:"required",
        mobile:{
          required:true,
          minlength:11
        }
        ,
        
          txtarea:{
            required:true
          }
    
    },messages:{
        fname:{
          required:"please enter your First name",
          minlength:"Must be 6 char long"
        },
        lname:{
          required:"please enter your Last name",
          minlength:"Must be 6 char long"
        },
        email:"Enter your email",
        mobile:{
          required:"please enter your Mob number",
          minlength:"Mobile num must be 11 digit long"
        },
        txtarea:{
          required:"You should comment us"
        }
    }

});
