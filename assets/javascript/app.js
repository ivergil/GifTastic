var food = ["Sushi", "Hot Dog", "Pizza", "Coockies"];
var results;
function displayGif() {
    $("#gif-holder").empty();
    var foodGif = $(this).text();
   

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + foodGif + "&api_key=3gmYAfANgvBe9jzbhPeRi41eHWFT4h5M&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            
            results = response.data;
            
            for (var i = 0; i <= results.length; i++) {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var foodP = $("<p>").text("Rating: " + rating);
                var foodImage = $("<img>");
                foodImage.attr("value",i);
                foodImage.attr("id", "food-gif");
                foodImage.attr("data-state","still");
                var urlGif = results[i].images.fixed_height_still.url;
                // IMAGEN EN MOVIMIENTO foodImage.attr("src", results[i].images.fixed_height.url);
                foodImage.attr("src", urlGif);

                gifDiv.append(foodP);
                gifDiv.append(foodImage);
                $("#gif-holder").append(gifDiv);
            }
        });
}

function pause() {
    var state = $(this).attr("data-state");
    var gif = $(this).attr("value");
    
    if (state === "still") {
        
        $(this).attr("src", results[gif].images.fixed_height.url);
        $(this).attr("data-state", "animate");
    } else {
        
        $(this).attr("src", results[gif].images.fixed_height_still.url);
        $(this).attr("data-state", "still");
    }
};

function displayButtons() {
    $(".buttons-holder").empty();

    for (var i = 0; i < food.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("btn, btn-primary m-2");
        newBtn.attr("id", "food-btn")
        newBtn.attr("name-data", food[i]);
        newBtn.text(food[i]);
        $(".buttons-holder").append(newBtn);
    }
}

$("#add-gif").on("click", function (e) {
    e.preventDefault();
    var newFood = $("#food-input").val().trim();
    food.push(newFood);
    $("#food-input").val("");
    displayButtons();

});

$(document).on("click", "#food-btn", displayGif);
$(document).on("click", "#food-gif", pause);
