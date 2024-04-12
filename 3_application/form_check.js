function validate(form) {
    if (!checkStringAndFocus(form.elements["f_imie"], "Podaj imię!")) { return false; }
    if (!checkStringAndFocus(form.elements["f_nazwisko"], "Podaj nazwisko!")) { return false; }
    if (!checkEmail(form.elements["f_email"])) { return false; }
    if (!checkStringAndFocus(form.elements["f_kod"], "Podaj kod!")) { return false; }
    if (!checkStringAndFocus(form.elements["f_ulica"], "Podaj ulicę!")) { return false; }
    if (!checkStringAndFocus(form.elements["f_miasto"], "Podaj miasto!")) { return false; }
    return true;
}


function checkStringAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpaceOrEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        return true;
    }
}


function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
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
