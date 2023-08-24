var appsscriptlink = "https://script.google.com/macros/s/AKfycbxH8tAXPdOC5XWsJKcWlQxesgXhiUqJ5-RixKCZLaGqU7mgMqBfUee5tJGUjnQts1fF"
function SendEmail()
{
    var Username = ("#").val()
    $.getJSON(appsscriptlink+"/exec?page=FORGOTTENPASSWORD&username="+Username,
    function(data)
    {
        
    })
}