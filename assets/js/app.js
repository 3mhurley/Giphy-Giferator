// Vars
var host = "api.giphy.com";
var path = "/v1/gifs/";
var type = "search?";
var key = "api_key=ISaSDEvXsqYCZ3Rv7ZE5MtEVHQruUEMN";
var limit = "&limit=10";
var url = "https://" + host + path + type + key + limit;
var gifArr = ["Kirk","Spock","Pickard","Khan"];

// Objects

// Functions
function buttonator() {
    $("#gif-btns").empty();
    for (i=0; i < gifArr.length; i++) {
        var gifBtn = $("<button>");
        gifBtn.addClass("gifBtn btn btn-light");
        gifBtn.css({
            "text-transform": "capitalize",
            margin: "5px"
        });
        gifBtn.attr({
            type: "button",
            "data-gif": gifArr[i],
            id: (gifArr[i] + "-btn")
        });
        gifBtn.text(gifArr[i]);
        $("#gif-btns").append(gifBtn);
    }
}

function gifRDun(results) {
    for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
            // Make div container
            var gifDiv = $("<div>");
            gifDiv.addClass("gifBtn float-left");
            var size = results[i].images.fixed_height_still.width + "px";
            gifDiv.css({
                width: size,
                margin: "10px"
            });
            // Make info paragraph
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            // Make image
            var gif = $("<img>");
            gif.addClass("gifImg");
            gif.attr({
                src: results[i].images.fixed_height_still.url,
                "data-still": results[i].images.fixed_height_still.url,
                "data-animate": results[i].images.fixed_height.url,
                "data-state": "still"
            });
            // Combine
            gifDiv.append(p);
            gifDiv.append(gif);
            // Prepend
            $("#gifs").prepend(gifDiv);
        }
    }
}

// jQuery
$(document).ready(function() {

buttonator();

$("form").on("submit", function(event) {

    event.preventDefault();

    console.log("newbutton");

    var newGif = $("#add-gif").val().trim();
    gifArr.push(newGif);
    buttonator();
    $("form").trigger("reset");

});

$(".gifBtn").on("click", function() {
    console.log("get gifs")
    var slctgif = $(this).attr("data-gif");
    var query = "&q=star+trek+" + slctgif;
    var queryURL = url + query;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
        console.log(response);
        $("#gifs").empty();
        var results = response.data;
        gifRDun(results);
    });
});

$(".gifImg").on("click", function() {
    console.log("playpause");
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

});