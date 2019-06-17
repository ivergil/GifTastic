var food = ["Sushi", "Hot Dog", "Pizza", "Coockies"];

function displayGif() {
    $("#gif-holder").empty();
    var foodGif = $(this).text();
    console.log(foodGif);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        foodGif + "&api_key=3gmYAfANgvBe9jzbhPeRi41eHWFT4h5M&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"

    })
        // After the data comes back from the API

        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            // Storing an array of results in the results variable
            var results = response.data;
            console.log(results);

            // Looping over every result item
            for (var i = 0; i <= results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                // if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div for the gif
                var gifDiv = $("<div>");

                // Storing the result item's rating
                var rating = results[i].rating;

                // Creating a paragraph tag with the result item's rating
                var foodP = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var foodImage = $("<img>");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                foodImage.attr("src", results[i].images.fixed_height.url);

                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(foodP);
                gifDiv.append(foodImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gif-holder").append(gifDiv);
                // }
            }
        });

}

function displayButtons() {
    $(".buttons-holder").empty();

    for (var i = 0; i < food.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("btn, btn-primary m-2");
        newBtn.attr("id", "food-btn")
        newBtn.attr("name-data", food[i]);
        newBtn.text(food[i]);
        // console.log(newBtn);
        $(".buttons-holder").append(newBtn);
    }
}

$("#add-gif").on("click", function (e) {
    e.preventDefault();
    var newFood = $("#food-input").val().trim();
    food.push(newFood);
    console.log(newFood);
    $("#food-input").val("");
    displayButtons();

});
$(document).on("click", "#food-btn", displayGif);
