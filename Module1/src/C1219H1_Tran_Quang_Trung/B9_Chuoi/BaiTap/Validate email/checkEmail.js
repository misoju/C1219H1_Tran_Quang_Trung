let inputEmail = document.getElementById("CustomEmail");
function checkEmail(str) {
    correctEmail = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (correctEmail.test(str)){
        return true;
    }
    return false;
}
function alertResult(){
alert(checkEmail(inputEmail));
}