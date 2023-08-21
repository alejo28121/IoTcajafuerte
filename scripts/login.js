function login(){
    const h2 = document.getElementById("h2-text");
    var userin = document.getElementById("input_user").value;
    var passwordin = document.getElementById("input_password").value;
    var user= "montollaevelyn061@gmail.com";
    var password = "2142021";

    if(userin === user && passwordin === password){
        document.getElementById("h2-text").className = "h2-text";
        document.getElementById("enter").href = "album.html";
        document.getElementById("enter").click();
        h2.innerText = "";
    }
    else{
        document.getElementById("h2-text").className = "h2-error";
        h2.innerText = "User or password incorrect!";
    }
    return false;
}