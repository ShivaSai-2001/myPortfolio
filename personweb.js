
function message()
{
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndex(".");

    if(name == null || name == "")
    {
        return false;
    }
    if(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)
    {
        return false;
    }
}