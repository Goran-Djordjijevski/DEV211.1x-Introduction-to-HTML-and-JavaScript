function saveToCookie(key, value, onCompletion) {
    var cookieValue = key + ";" + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue() {
    var textValue = document.getElementsByName("position")[0].value;
    saveToCookie("Position", textValue, showTextSuccess);
}

function showTextSuccess(result) {
    alert("You successfully saved [" + result + "] from the text input to your cookie.");
}