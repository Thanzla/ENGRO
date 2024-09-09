// $(document).ready(function(){
//     $(".btn").click(function(){
//         let a=$('.a').val();
//         let a1=$('.a1').val();
//         if(a==""||a1=="")
//         {

//         }
//         else
//         {
//             window.location.href("1st.html")
//         }
        
//     })
// })
$(document).ready(function(){
    $("#loginForm").submit(function(event){
        event.preventDefault(); // Prevent the form from submitting the traditional way
        var email = $("#email").val();
        var password = $("#password").val();
        if(email && password){
            window.location.href = 'index2.html';
        } else {
            alert("Please enter both email and password.");
        }
    });
    $("#togglePassword").click(function(){
        var passwordField = $("#password");
       
        var passwordFieldType = passwordField.attr("type");
        if(passwordFieldType === "password"){
            passwordField.attr("type", "text");
            $(this).removeClass('bx-hide').addClass('bxs-show');
        } else {
            passwordField.attr("type", "password");
            $(this).removeClass('bxs-show').addClass('bx-hide');
        }
    });

});