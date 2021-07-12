$(document).ready(function() {
    $.validator.addMethod('checkUsername',function(value,element) {
        return this.optional(element) || /^[a-zA-Z0-9_]+$/.test(value);
    },"please enter alphanumeric value for user name");

    $.validator.addMethod('checkFullname',function(value,element) {
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    },"please enter valid name");

    $.validator.addMethod('checkPassword',function(value,element) {
        return this.optional(element) || /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value);
    },"Your password include Lowercase Uppercase and special symbols");
    
    $('#myform').validate({
        onkeyup: function(element) {
            $(element).valid(); 
        },
        rules: {
            fullname: {
                required: true,
                minlength: 3,
                checkFullname: true
            },
            username: {
                required: true,
                minlength: 5,
                checkUsername: true
            },
            email: {
                required: function() {
                    if($('#contact').val() == '') {
                        return true;
                    } else {
                        return false;
                    }
                },
                email: true
            },
            contact: {
                required: function() { 
                    if($('#email').val() == '') { 
                        return true;
                    } else {
                        return false;
                    }
                },
                minlength: 10,
                maxlength: 10
            },
            password: {
                required: true,
                minlength: 8,
                checkPassword: true
            },
            gender: {
                required: true,
            },
            course: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).css('border','1px solid red');
        },
        unhighlight: function(element) {
            $(element).css('border','1px solid lightgrey');
        },
        messages: {
            fullname: {
                required: "Full name feild can not be empty"
            },
            username: {
                required: "username feild can not be empty"
            },
            email: {
                required: "Either email or contact is required"
            },
            contact: {
                required: "Either email or contact is required",
                minlength: "Contact number must be of 10 characters",
                maxlength: "Contact number must be of 10 characters"
            },
            password: {
                required: "password feild can not be empty",
                minlength: "password must have atleast 8 character"
            },
            gender: {
                required: "please select gender"
            },
            course: {
                required: "select a feild"
            },
        },
        submitHandler: function(form) {
            console.log("submitted");
            form.submit();
        }
    });
});
