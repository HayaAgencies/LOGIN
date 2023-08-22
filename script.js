var appsscriptlink = "https://script.google.com/macros/s/AKfycbxXbU5_msSkooHVLJdZA3MohiK-CXLcwZ7GMISTZg0aXjO7bxwmdRg-k87EEViG8amX"
var appspassword = 0;
let otp=""

function ValidateUsername(){
    $("#Successlogin").hide()
    $("#invu").hide()
    $("#wait_screen").show()
    var username = $("#Username").val()
    $.getJSON(appsscriptlink+"/exec?page=search&username="+username,
    function(data){
        if(data == "Not")
        {
            $("#wait_screen").hide()
            $("#invu").show()
        }
        else
        {
            appspassword = data
            $("#wait_screen").hide()
            $("#didntp").hide()
            $("#Username").css("border","1px solid green")
        }
    })
}
function ValidatePasword()
{
    $("#invu").hide()
    $("#userf").hide()
    $("#Successlogin").hide()
    $("#failedlogin").hide()
    $("#didntp").hide()
    var upass = $("#Password").val()
    if(upass == "")
    {
        $("#didntp").show()
    }
    else if(upass == appspassword)
    {
        $("#Successlogin").show()
        $("#Password").css("border","1px solid green")
        window.location.replace("https://hayaagencies.github.io/try/")
    }
    else
    {
        $("#failedlogin").show()
    }
}
function Clearalert()
{
    $("#didntp").hide()
    $("#wait_screen").hide()
    $("#invu").hide()
    $("#userf").hide()
    $("#Successlogin").hide()
    $("#failedlogin").hide()
}
