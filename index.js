var password1 =document.getElementById("password1");
var password2 =document.getElementById("password1");
var password3 =document.getElementById("password1");
var password4 =document.getElementById("password1");

function generate() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password1 = "";
    var password2 = "";
    var password3 = "";
    var password4 = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password1 += chars.substring(randomNumber, randomNumber +1);
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password2 += chars.substring(randomNumber, randomNumber +1);
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password3 += chars.substring(randomNumber, randomNumber +1);
    }
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password4 += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password1").value = password1;
    document.getElementById("password2").value = password2;
    document.getElementById("password3").value = password3;
    document.getElementById("password4").value = password4;
}

function copy1() {
    var copyText1 = document.getElementById("password1");
    copyText1.select();
    document.execCommand("copy");  
}

function copy2() {
    var copyText2 = document.getElementById("password2");
    copyText2.select();
    document.execCommand("copy");  
}

function copy3() {
    var copyText3 = document.getElementById("password3");
    copyText3.select();
    document.execCommand("copy");  
}

function copy4() {
    var copyText4 = document.getElementById("password4");
    copyText4.select();
    document.execCommand("copy");  
}