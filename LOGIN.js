function verif()
{   
    var emaile =document.getElementById("email").value ;
    var pw1 = document.getElementById("password").value ;
    var ch2=emaile.substr(0,((emaile.length)-10));
    if ( (pw1 =="") && (emaile =="") )
    {
        alert("Please fill your Email and your PassWord !! ");
        return false ; 
    }
    else if (emaile =="")
    {
        alert("Please fill your Email ! "); 
        return false ; 
    }
    else if (pw1 == "")
        {
            alert ("Please fill your PassWord ! ");
            return false ; 
        }
    else if (pw1.length < 8)
        { 
            alert("the PassWord should be more than 8 characters ! "); 
            return false ; 
        }
    else 
    {
        alert ("WELCOME"+" "+ch2);
        return true ;
    }
}