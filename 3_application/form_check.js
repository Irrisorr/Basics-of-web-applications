function validate (formularz) {
    if (isWhiteSpaceOrEmpty(formularz.elements["f_imie"].value)) {
        alert("Podaj imie");
        return false;
    }
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
