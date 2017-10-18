function handleClick(callback) {
    alert("This button has been clicked");

    if (callback == true) {
        callback();
    }
}

function doMore() {
    alert("I could process more logic here");
}