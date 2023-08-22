var appsscriptlink = "https://script.google.com/macros/s/AKfycbxXbU5_msSkooHVLJdZA3MohiK-CXLcwZ7GMISTZg0aXjO7bxwmdRg-k87EEViG8amX"
let exist = false;
let otp = "";
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
        }
        else
        {
            $("#wait_screen").hide()
            $("#didntp").show()
        }
    })
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
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbyU9jTqkLlQ3CD5pS9AgKbxdwFrt_41SAc0mHokC744SB52b8HvBAxOBNAunsv68uxY/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
    }
    else
    {
        alert("Your OTP is incorrect")
    }
}    