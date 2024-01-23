function submitForm(){
    var name = document.getElementById("name").value;
    var message = `Name: ${name}` + "\n" + document.getElementById("message").value;
    var mailTo = "mailto:seetharamanshan699@gmail.com"
                + "?body=" + encodeURIComponent(message);
    window.location.href = mailTo;
    return false;
}

function redirectToContactPage(){
    window.location.href = "contact.html";
}