var userData;


window.onload = pageLoad;
function pageLoad(){
    userData = document.getElementById("myForm");
    userData.onsubmit = validateForm;

}

function validateForm() {
    if(userData.password.value == userData.retypePassword.value)
    {
        
    }
    else{
        var errormasg = document.getElementById("errormsg");
        errormasg.innerHTML = "Incorrect Retype Password";
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}