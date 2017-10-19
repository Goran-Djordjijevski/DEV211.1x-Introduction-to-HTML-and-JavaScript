$(document).ready(function () {
    makeRequests();
});

function makeRequests() {
    $.ajax({
        url: "http://httpbin.org/get",
        method: "GET",
        dataType: "JSON"
    }).done(function(response) {
        $("body > p").text(JSON.stringify(response));
    })
    .fail(function () {
        alert("An error has occured")
    });
}