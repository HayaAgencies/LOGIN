var appsscriptlink = "https://script.google.com/macros/s/AKfycbxH8tAXPdOC5XWsJKcWlQxesgXhiUqJ5-RixKCZLaGqU7mgMqBfUee5tJGUjnQts1fF"
let otp = "";
var x =Boolean(x)
var p = Boolean(p)
const Generateotp = () =>{
    const length = 6
    
    for (let i = 0; i < length; i++) {
        otp+=Math.floor(Math.random()*10)
    }
    return otp
}
function ValidateUsername(){
    $("#didntp").hide()
    $("#Successlogin").hide()
    $("#invu").hide()
    $("#wait_screen").show()
    var username = $("#Username").val()
    $.getJSON(appsscriptlink+"/exec?page=search&username="+username,
    function(data){
        if(data == "Not")
        {
            $("#wait_screen").hide()
            $("#Username").css("border","1px solid green")
            x = true
        }
        else
        { 
            $("#wait_screen").hide()
            $("#didntp").show()
            x = false
        }
    })
}
function checkpassword()
{
    $("#passwordwrong").hide()
    var password = $("#Password").val()
    var conformpassword = $("#Conform_password").val()
    if(password == conformpassword)
    {
        p = true
        $("#Password").css("border","1px solid green")
        $("#Conform_password").css("border","1px solid green")
    }
    else
    {
        $("#passwordwrong").show()
        alert("You Password looks different")
    }
}
function send_otp()
{
    var emailid = $("#email").val()
    $.getJSON(appsscriptlink+"/exec?page=SendOtp&EmailId="+emailid,
    function(data){
        
        otp = data
        console.log(otp)
    })
}
function vaidateOTP()
{
    var uOTP = $("#OTP").val() 
    if(uOTP == otp)
    {
        ValidateUsername()
        checkpassword()
        if(p)
        {
            if(x)
            {
               $.ajax({
                url:"https://script.google.com/macros/s/AKfycbyU9jTqkLlQ3CD5pS9AgKbxdwFrt_41SAc0mHokC744SB52b8HvBAxOBNAunsv68uxY/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.replace("https://hayaagencies.github.io/LOGIN/")
                        
                },
                error:function (err){
                    alert("Something Error")
        
                }
               })
            }
            else
            {
                $("#didntp").show()
                alert("change username")
            }
        }
        else
        {
            $("#passwordwrong").show()
            alert("You Password looks different")
        }
    }
    else
    {
        alert("Your OTP is incorrect")
    }
}    