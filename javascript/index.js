function checkBox(){
    var x = document.getElementById("passinput")
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}