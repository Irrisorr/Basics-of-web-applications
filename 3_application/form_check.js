function validate(form) {
    if (!checkString(form.elements["f_imie"], "Podaj imię!")) { return false; }
    if (!checkString(form.elements["f_nazwisko"], "Podaj nazwisko!")) { return false; }
    if (!checkEmail(form.elements["f_email"])) { return false; }
    if (!checkString(form.elements["f_kod"], "Podaj kod!")) { return false; }
    if (!checkString(form.elements["f_ulica"], "Podaj ulicę!")) { return false; }
    if (!checkString(form.elements["f_miasto"], "Podaj miasto!")) { return false; }
    return true;
}

function isEmpty(element) {
    if (element.length == "") {
        return true;
    }
    return false;
}


function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}


function checkString(seq, msg) {
    if (isWhiteSpaceOrEmpty(seq)) {
        alert(msg);
        return false;
    }
    return true;
}

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    if (email.test(str))
        return true;
    else {
        alert("Podaj właściwy e-mail");
        return false;
    }
}