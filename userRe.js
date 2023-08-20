var appsscriptlink = "https://script.google.com/macros/s/AKfycbx2ldMkQsKtuqaLCUz8ilyXjAwuvE-ohCDxrs55dRITCf1yiLx_Ciqi0PswnOvYRcbR"
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
    $.getJSON(appsscriptlink+"/exec?&username="+username,
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

console.log(Generateotp())