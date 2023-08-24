var appsscriptlink = "https://script.google.com/macros/s/AKfycbwSGqUUfdR1pGTl5UseYFNHkm_Vpz8l5faXVwpbOsocS637DOG57s6DCdl3nlsTMGXG"
function SendEmail()
{
    var Username = $("#Username").val()
    $.getJSON(appsscriptlink+"/exec?page=FORGOTTENPASSWORD&username="+Username,
    function(data)
    {
        if(data == "Mail Sended")
        {
            $("#mailsended").show()
            window.location.replace("index.html")
        }
    })
}