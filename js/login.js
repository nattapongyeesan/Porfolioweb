function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
        var pairs = document.URL.substring(idx + 1, document.URL.length).split('&');
        for (var i = 0; i < pairs.length; i++) {
            nameVal = pairs[i].split('=');
            params[nameVal[0]] = nameVal[1];
        }
    }
    return params;
}

window.onload = loginLoad;

function loginLoad() {
    var parameter = getParams();
    var submitButton = document.getElementById("myLogin");
    submitButton.onsubmit = checkLogin;
}

function checkLogin() {
    var parameter = getParams();
    var loginForm = document.getElementById("myLogin");
    if (loginForm.username.value == parameter["username"] &&
        loginForm.password.value == parameter["password"]) {
        alert("ยืนนันตัวตนสำเร็จ ยินดีต้อนรับค่ะ");
        return false;
    } else {
        alert("ชื่อผู้ใช้หรือหรัสผ่านไม่ถูกต้อง");
        return false;
    }
}