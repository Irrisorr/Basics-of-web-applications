function validate (form) {
    if (!checkString(form.elements["f_imie"], "Podaj imię!")) {return false;}
    if (!checkString(form.elements["f_nazwisko"], "Podaj nazwisko!")) {return false;}
    if (!checkString(form.elements["f_email"], "Podaj właściwy e-mail!")) {return false;}
    if (!checkString(form.elements["f_kod"], "Podaj kod!")) {return false;}
    if (!checkString(form.elements["f_ulica"], "Podaj ulicę!")) {return false;}
    if (!checkString(form.elements["f_miasto"], "Podaj miasto!")) {return false;}
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