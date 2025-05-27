$(document).ready(function(){
    $("#name").keyup(function(){
        let name = $(this).val();

        let nameRe = /^[a-zA-z/s]$/;

        if(!nameRe.test(name)){
            $(this).next("span").show().text("atleast 8 characters").css("color","red");
            $(this).css("border","2px solid red")
    }else{
        $(this).next("span").hide();
        $(this).css("border","2px solid green");
    }
})
    $("#email").keyup(function(){
        let email = $(this).val();

        let emailRe = /^[a-z0-9]{5,}[@][a-z]{5}[.][a-z]{3}$/;

        if(!emailRe.test(email)){
            $(this).next("span").show().text("atleast 8 characters").css("color","red");
            $(this).css("border","2px solid red")
    }else{
        $(this).next("span").hide();
        $(this).css("border","2px solid green");
    }
})
    $("#pass").keyup(function(){
        let pass = $(this).val();

        let passRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#!=?$])[a-zA-Z0-9@#!=?$]{8}$/;

        if(!passRe.test(pass)){
            $(this).next("span").show().text("only allow1 upercase,1lowercase,1digit,1specialssymbol").css("color","red");
            $(this).css("border","2px solid red")
    }else{
        $(this).next("span").hide();
        $(this).css("border","2px solid green");
    }
})

})