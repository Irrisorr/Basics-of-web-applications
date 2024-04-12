function isEmpty(element) {
    if (element.length == "") {
        return true;
    }
    return false;
}

function validate (formularz) {
    if (isEmpty(formularz.elements["f_imie"].value)) {
        alert("Podaj imie");
        return false;
    }
    return true;
}